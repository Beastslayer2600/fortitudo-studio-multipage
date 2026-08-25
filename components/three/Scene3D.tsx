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
 * Mounts a three.js scene into a canvas, with the rules that matter:
 *
 *  1. `three` is dynamically imported, so it lands in its own chunk and
 *     never blocks first paint.
 *  2. The scene only builds once it scrolls near the viewport, and stops
 *     rendering the moment it leaves — no background frame loops.
 *  3. Everything is disposed on unmount, so client-side route changes
 *     don't leak WebGL contexts. Browsers cap those at ~16; leak them and
 *     the site silently stops rendering after enough navigation.
 *  4. Pixel ratio is capped lower under 700px (see makeSizer in scenes.ts),
 *     which keeps this affordable on phones.
 *
 * Under prefers-reduced-motion, or on a device that can't actually create a
 * WebGL context, it renders nothing at all and whatever CSS background sits
 * behind it shows through — the same graceful fallback, just triggered by
 * real capability instead of a screen-width guess.
 */
function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function Scene3D({ variant, onHandle, className }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!hasWebGL()) return;

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
          (entries) => entries.forEach((e) => { onScreen = e.isIntersecting; }),
          { rootMargin: '120px' },
        );
        visObserver.observe(host);
      } catch (err) {
        // Scene build failed (e.g. WebGL context lost, driver quirk on a
        // low-end phone) — bail out quietly and let the CSS background
        // behind the canvas show through, same as the capability check.
        console.warn('Scene3D: falling back to static background', err);
        handle?.dispose();
        handle = null;
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
