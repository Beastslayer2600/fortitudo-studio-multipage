// GF monogram seal. Stands in for a portrait until one exists.
// Interlocked serif G and italic F inside a ring that carries the brand line,
// on the site's deep green with a faint lattice echoing the background pattern.
// The ring turns very slowly; it stays still for visitors who prefer reduced motion.

export default function Monogram({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-[var(--gold)]/25 ${className}`}>
      <svg
        viewBox="0 0 400 500"
        role="img"
        aria-label="Gert Fourie monogram: Fortitudo, strength to build it, patience to keep it"
        className="block h-full w-full"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        <defs>
          <radialGradient id="gfm-bg" cx="50%" cy="42%" r="75%">
            <stop offset="0" stopColor="#123a2b" />
            <stop offset="0.55" stopColor="#0d2a1f" />
            <stop offset="1" stopColor="#07170f" />
          </radialGradient>
          <linearGradient id="gfm-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e9d6a6" />
            <stop offset="0.45" stopColor="#c8a45c" />
            <stop offset="1" stopColor="#8f7440" />
          </linearGradient>
          <pattern id="gfm-lat" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <path d="M0 0H22" stroke="#c8a45c" strokeOpacity=".07" strokeWidth="1" />
          </pattern>
          <path id="gfm-ring" d="M200 230 m-133 0 a133 133 0 1 1 266 0 a133 133 0 1 1 -266 0" />
        </defs>

        <rect width="400" height="500" fill="url(#gfm-bg)" />
        <rect width="400" height="500" fill="url(#gfm-lat)" />
        <rect x="14" y="14" width="372" height="472" fill="none" stroke="#c8a45c" strokeOpacity=".35" />
        <rect x="20" y="20" width="360" height="460" fill="none" stroke="#c8a45c" strokeOpacity=".15" />

        {/* Seal */}
        <circle cx="200" cy="230" r="152" fill="none" stroke="url(#gfm-gold)" strokeWidth="1.2" />
        <circle cx="200" cy="230" r="146" fill="none" stroke="#c8a45c" strokeOpacity=".35" />
        <circle cx="200" cy="230" r="116" fill="#0a2219" stroke="url(#gfm-gold)" strokeWidth="1" />

        <g className="gfm-spin">
          <g transform="rotate(61.6 200 230)">
            <text fontSize="12.5" letterSpacing="4" fill="#d9c08a">
              <textPath href="#gfm-ring" textLength="826" lengthAdjust="spacing">
                FORTITUDO · STRENGTH TO BUILD IT · PATIENCE TO KEEP IT ·
              </textPath>
            </text>
          </g>
        </g>

        <path d="M200 78v8M200 374v8M48 230h8M344 230h8" stroke="#c8a45c" strokeOpacity=".7" />

        {/* Stacked layers, echoing the plan calculator */}
        <path d="M138 300h124M146 292h108M154 284h92" fill="none" stroke="#c8a45c" strokeOpacity=".18" />

        {/* Interlocked letters */}
        <text x="178" y="268" textAnchor="middle" fontSize="128" fill="url(#gfm-gold)">
          G
        </text>
        <text x="236" y="268" textAnchor="middle" fontSize="128" fontStyle="italic" fill="url(#gfm-gold)" opacity=".92">
          F
        </text>

        {/* Name block */}
        <path d="M150 418h100" stroke="#c8a45c" strokeOpacity=".5" />
        <text x="200" y="444" textAnchor="middle" fontSize="15" letterSpacing="6" fill="#f2efe6">
          GERT FOURIE
        </text>
        <text x="200" y="466" textAnchor="middle" fontSize="9.5" letterSpacing="4" fill="#c8a45c" fillOpacity=".85">
          BUILT TO ENDURE
        </text>
      </svg>
    </div>
  );
}
