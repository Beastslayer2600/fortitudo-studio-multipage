'use client';

import { useEffect, useRef } from 'react';
import { buildScene, type SceneHandle, type SceneVariant } from '@/lib/three/scenes';

interface Props {
  variant: SceneVariant;
  onHandle?: (h: SceneHandle) => void;
  className?: string;
}

/** True only when the device can actually create a WebGL context. */
function canUseWebGL(): boolean {
  if (typeof document === 'undefined') return false;
  try {
    const c = document.createElement('canvas');
    const gl =
      c.getContext('webgl2', { failIfMajorPerformanceCaveat: false }) ||
      c.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ||
      c.getContext('experimental-webgl', { failIfMajorPerformanceCaveat: false } as WebGLContextAttributes);
    if (!gl) return false;
    // Force a tiny use so some Safari builds surface context loss early
    const lose = (gl as WebGLRenderingContext).getExtension('WEBGL_lose_context');
    // do not actually lose — just confirm the extension path is alive
    void lose;
    return true;
  } catch {
    return false;
  }
}

/**
 * Mounts a three.js scene with mobile/Safari-safe lifecycle:
 * capability probe, lazy mount, off-screen pause, visibility pause,
 * context-loss recovery, full dispose.
 */
export default function Scene3D({ variant, onHandle, className }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!canUseWebGL()) return;

    let handle: SceneHandle | null = null;
    let raf = 0;
    let onScreen = true;
    let pageVisible = !document.hidden;
    let cancelled = false;
    let start = 0;
    let visObserver: IntersectionObserver | null = null;
    let mounted = false;

    const stopLoop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const loop = () => {
      if (cancelled) return;
      if (onScreen && pageVisible && handle) {
        handle.update((performance.now() - start) / 1000);
      }
      raf = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (cancelled || raf) return;
      start = performance.now();
      loop();
    };

    const disposeHandle = () => {
      stopLoop();
      handle?.dispose();
      handle = null;
      canvas.style.opacity = '0';
    };

    const mount = async () => {
      if (mounted || cancelled) return;
      mounted = true;
      try {
        const THREE = await import('three');
        if (cancelled) return;

        handle = buildScene(THREE, variant, canvas);
        onHandle?.(handle);

        // Two rAFs so Safari has layout + clientWidth before first draw
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (cancelled || !handle) return;
            handle.update(0);
            canvas.style.opacity = '1';
            startLoop();
          });
        });

        visObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              onScreen = e.isIntersecting;
            });
          },
          { rootMargin: '80px', threshold: 0.01 },
        );
        visObserver.observe(host);
      } catch (err) {
        console.warn('[Scene3D] failed to mount', err);
        disposeHandle();
        mounted = false;
      }
    };

    const onVisibility = () => {
      pageVisible = !document.hidden;
      // iOS often kills WebGL when backgrounded — remount on return if needed
      if (pageVisible && mounted && !handle && onScreen) {
        mounted = false;
        void mount();
      }
    };

    const onContextLost = (e: Event) => {
      e.preventDefault();
      console.warn('[Scene3D] WebGL context lost');
      disposeHandle();
    };

    const onContextRestored = () => {
      console.info('[Scene3D] WebGL context restored — remounting');
      mounted = false;
      if (onScreen) void mount();
    };

    canvas.addEventListener('webglcontextlost', onContextLost, false);
    canvas.addEventListener('webglcontextrestored', onContextRestored, false);
    document.addEventListener('visibilitychange', onVisibility);

    const mountObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            mountObserver.unobserve(e.target);
            void mount();
          }
        });
      },
      { rootMargin: '200px', threshold: 0.01 },
    );
    mountObserver.observe(host);

    return () => {
      cancelled = true;
      mountObserver.disconnect();
      visObserver?.disconnect();
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      document.removeEventListener('visibilitychange', onVisibility);
      disposeHandle();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-700"
      />
    </div>
  );
}
