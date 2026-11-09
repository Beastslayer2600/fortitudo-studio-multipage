// Share-card artwork for /guides/january-already-spent, rendered by next/og.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_ALT = "How much of January have you already spent? An interactive guide by Gert Fourie."

export type OgTier = "manageable" | "crowded" | "spoken"
export function isOgTier(t: string): t is OgTier {
  return t === "manageable" || t === "crowded" || t === "spoken"
}

// Kept in step with RESULT_COPY.tiers in components/guides/JanuaryStack.tsx.
const TIER_LINE: Record<OgTier, string> = {
  manageable: "Manageable.",
  crowded: "Crowded.",
  spoken: "January is already spoken for.",
}

// A fixed, illustrative stack. Never a visitor's numbers.
const BARS = [0.22, 0.3, 0.58, 0.26, 0.18, 0.1]
const FOCUS = 2

const BG = "#0B0D10"
const CREAM = "#F8F4EA"
const GOLD = "#BCA472"
const GOLD_LIGHT = "#e6cf9c"
const MUTED = "#8aa094"

export function renderJanuaryOg(tier: OgTier | null) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: BG,
        color: CREAM,
        padding: "64px 72px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640 }}>
        <div style={{ display: "flex", fontSize: 20, letterSpacing: 5, textTransform: "uppercase", color: GOLD }}>
          Guide · Interactive · Credit
        </div>
        {tier ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 76, lineHeight: 1.05, color: GOLD_LIGHT, fontStyle: "italic" }}>
              {TIER_LINE[tier]}
            </div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 34, lineHeight: 1.25, color: CREAM }}>
              How much of January have you already spent?
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", fontSize: 66, lineHeight: 1.08 }}>
            <span>How much of January</span>
            <span>have you</span>
            <span style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>already spent?</span>
          </div>
        )}
        <div style={{ display: "flex", fontSize: 22, color: MUTED }}>
          Ninety seconds · fortitudostudios.com/january
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "auto",
          width: 380,
          gap: 18,
        }}
      >
        {BARS.map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              height: i === FOCUS ? 56 : 36,
              border: `${i === FOCUS ? 2 : 1}px solid ${i === FOCUS ? GOLD : "rgba(138,160,148,.45)"}`,
              borderRadius: 4,
            }}
          >
            <div style={{ display: "flex", width: `${b * 100}%`, background: i === FOCUS ? GOLD : "rgba(188,164,114,.55)" }} />
          </div>
        ))}
      </div>
    </div>
  )
}
