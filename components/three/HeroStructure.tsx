'use client';

import Scene3D from './Scene3D';

/**
 * Drop-in backdrop for the existing hero. It positions itself absolutely and
 * sits behind the copy, so the hero section only needs `relative` and its
 * text needs to be above z-0.
 *
 * The gradient below the canvas is not a placeholder — it is what mobile and
 * reduced-motion visitors actually see, so it has to stand on its own.
 */
export default function HeroStructure() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(58% 50% at 70% 42%, rgba(200,164,92,.15), rgba(0,0,0,0) 68%),
            repeating-linear-gradient(180deg, rgba(200,164,92,.045) 0 1px, rgba(0,0,0,0) 1px 15px),
            linear-gradient(180deg,#08201a 0%,#061710 100%)`,
        }}
      />
      <Scene3D variant="structure" className="absolute inset-0 -z-10 overflow-hidden" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg,rgba(6,23,16,.6),rgba(6,23,16,.25) 45%,#061710)',
        }}
      />
      {/* wide screens: angle the scrim so the copy column stays legible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            'linear-gradient(96deg,#061710 2%,rgba(6,23,16,.88) 34%,rgba(6,23,16,.1) 64%,rgba(6,23,16,0) 80%)',
        }}
      />
    </>
  );
}
