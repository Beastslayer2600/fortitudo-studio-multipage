// Share-card artwork for /guides/life-in-layers, rendered by next/og.
export const OG_SIZE = { width: 1200, height: 630 }
export const OG_ALT = "Life in Layers: one layer for every year. An interactive guide by Gert Fourie."

const BG = "#0B0D10"
const CREAM = "#F8F4EA"
const GOLD = "#BCA472"
const GOLD_LIGHT = "#e6cf9c"
const MUTED = "#8aa094"

// A fixed, illustrative stack: cream bars growing stronger, one gold bar on top.
const CREAM_BARS = 9

export function renderLayersOg() {
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
          Guide · Interactive · Time
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05 }}>
          <span>Your life,</span>
          <span style={{ color: GOLD_LIGHT, fontStyle: "italic" }}>in layers.</span>
          <span style={{ display: "flex", marginTop: 28, fontSize: 32, color: CREAM, opacity: 0.8 }}>
            One layer for every year.
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: MUTED }}>Gert Fourie · fortitudostudios.com</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          marginLeft: "auto",
          width: 380,
          gap: 8,
        }}
      >
        <div style={{ display: "flex", height: 30, background: GOLD }} />
        {Array.from({ length: CREAM_BARS }).map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              height: 30,
              background: CREAM,
              opacity: 0.85 - i * 0.07,
              marginLeft: i % 2 ? 0 : 3,
              marginRight: i % 2 ? 0 : 3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
