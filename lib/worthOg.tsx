// Share-card artwork for /guides/what-are-you-worth, rendered by next/og.
// Same palette and layout as lib/januaryOg.tsx.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_ALT = "What are you worth? An interactive guide by Gert Fourie."

// A fixed, illustrative run of working years. Never a visitor's numbers.
const YEARS = [0.18, 0.26, 0.34, 0.42, 0.5, 0.6, 0.7, 0.82, 1]

const BG = "#0B0D10"
const CREAM = "#F8F4EA"
const GOLD = "#BCA472"
const GOLD_LIGHT = "#e6cf9c"
const MUTED = "#8aa094"

export function renderWorthOg() {
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
          Guide · Interactive · Protection
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.06 }}>
          <span>What are you</span>
          <span style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>worth?</span>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: MUTED }}>
          Sixty seconds · fortitudostudios.com/worth
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          marginLeft: "auto",
          width: 380,
          height: "100%",
          gap: 14,
        }}
      >
        {YEARS.map((h, i) => {
          const last = i === YEARS.length - 1
          return (
            <div
              key={i}
              style={{
                display: "flex",
                width: last ? 40 : 28,
                height: `${h * 78}%`,
                background: last ? GOLD : "rgba(188,164,114,.45)",
                border: last ? `2px solid ${GOLD}` : "1px solid rgba(138,160,148,.45)",
                borderRadius: 3,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
