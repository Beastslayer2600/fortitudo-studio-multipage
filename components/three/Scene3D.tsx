'use client';

import { useEffect, useRef } from 'react';
import { buildScene, type SceneHandle, type SceneVariant } from '@/lib/three/scenes';

interface Props {
  variant: SceneVariant;
  /** Called once the scene exists, so parents can drive it with .set() */
  onHandle?: (h: SceneHandle) => void;
  className?: string;
}

/**
 * Mounts a three.js scene into a canvas.
 *
 * - Dynamic import of three so it never blocks first paint
 * - Only builds when near the viewport; pauses when off-screen
 * - Full dispose on unmount to avoid WebGL context leaks
 * - Mobile is supported (Safari included) with reduced pixel ratio and no antialias
 * - Still skips prefers-reduced-motion for accessibility
 */
export default function Scene3D({ variant, onHandle, className }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    // Accessibility only — keep motion off when the user asks for it.
    // Do NOT gate on viewport width: phones (especially Safari) must still get the 3D.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let handle: SceneHandle | null = null;
    let raf = 0;
    let onScreen = true;
    let cancelled = false;
    let start = 0;
    let visObserver: IntersectionObserver | null = null;

    const mount = async () => {
      try {
        const THREE = await import('three');
        if (cancelled) return;

        handle = buildScene(THREE, variant, canvas);
        onHandle?.(handle);
        canvas.style.opacity = '1';
        start = performance.now();

        const loop = () => {
          if (cancelled) return;
          if (onScreen && handle) handle.update((performance.now() - start) / 1000);
          raf = requestAnimationFrame(loop);
        };
        loop();

        visObserver = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              onScreen = e.isIntersecting;
            }),
          { rootMargin: '120px' },
        );
        visObserver.observe(host);
      } catch (err) {
        // WebGL unavailable / context lost — leave CSS backdrop visible
        console.warn('[Scene3D] failed to mount', err);
        canvas.style.opacity = '0';
      }
    };

    const mountObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            mountObserver.unobserve(e.target);
            void mount();
          }
        });
      },
      { rootMargin: '250px' },
    );
    mountObserver.observe(host);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      mountObserver.disconnect();
      visObserver?.disconnect();
      handle?.dispose();
    };
    // variant never changes for a given mount point
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-1000"
      />
    </div>
  );
}
