// Draws the "January slip" story image (1080x1920) in the browser.
// Nothing here leaves the device: the canvas is built locally and handed to
// the native share sheet or downloaded. Rand amounts and item names are
// never passed in, so they can never be drawn.

export type SlipInput = {
  /** "JANUARY" — drawn uppercase. */
  focusLabel: string;
  /** e.g. "Crowded." */
  tierHeadline: string;
  /** Whole percentage, or null when the visitor left the box unticked. */
  pct: number | null;
  /** "April 2027", or null when nothing is left to clear. */
  clearsOn: string | null;
};

export const SLIP_WIDTH = 1080;
export const SLIP_HEIGHT = 1920;
export const SLIP_FILENAME = "my-january-slip.png";

const BG = "#0B0D10";
const PAPER = "#F8F4EA";
const INK = "#1b1b1b";
const MONO = '"Courier New", Courier, ui-monospace, Menlo, Consolas, monospace';
const SERIF = 'Georgia, "Times New Roman", Times, serif';

export function drawSlip(input: SlipInput): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = SLIP_WIDTH;
  canvas.height = SLIP_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, SLIP_WIDTH, SLIP_HEIGHT);

  // Paper with torn (zig-zag) top and bottom edges.
  const x0 = 150;
  const x1 = SLIP_WIDTH - 150;
  const top = 250;
  const bottom = SLIP_HEIGHT - 250;
  const tooth = 26;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.55)";
  ctx.shadowBlur = 50;
  ctx.shadowOffsetY = 18;
  ctx.beginPath();
  ctx.moveTo(x0, top);
  for (let x = x0, up = true; x < x1; x += tooth / 2, up = !up) {
    ctx.lineTo(Math.min(x + tooth / 2, x1), up ? top - 14 : top);
  }
  ctx.lineTo(x1, bottom);
  for (let x = x1, down = true; x > x0; x -= tooth / 2, down = !down) {
    ctx.lineTo(Math.max(x - tooth / 2, x0), down ? bottom + 14 : bottom);
  }
  ctx.closePath();
  ctx.fillStyle = PAPER;
  ctx.fill();
  ctx.restore();

  // Faint thermal-paper speckle (deterministic, so every slip looks the same).
  let seed = 7;
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  ctx.fillStyle = "rgba(27,27,27,.05)";
  for (let i = 0; i < 900; i++) {
    ctx.fillRect(x0 + rand() * (x1 - x0), top + rand() * (bottom - top), 2, 2);
  }

  const left = x0 + 70;
  const right = x1 - 70;
  const width = right - left;
  const center = SLIP_WIDTH / 2;
  let y = top + 230;

  ctx.fillStyle = INK;
  ctx.textBaseline = "alphabetic";

  // RECEIPT
  ctx.textAlign = "center";
  ctx.font = `400 104px ${SERIF}`;
  spaced(ctx, "RECEIPT", center, y, 14);
  y += 80;
  rule(ctx, left, right, y);
  y += 120;

  // Focus month
  ctx.font = `700 84px ${MONO}`;
  ctx.textAlign = "left";
  ctx.fillText(input.focusLabel.toUpperCase(), left, y);
  y += 110;

  ctx.font = `400 40px ${MONO}`;
  y = leaderRow(ctx, "Already spent", input.tierHeadline, left, right, y);
  if (input.pct !== null) y = leaderRow(ctx, "Share of pay", `${input.pct}%`, left, right, y + 30);
  y = leaderRow(ctx, "Clears on", input.clearsOn ?? "Nothing left", left, right, y + 30);

  y += 50;
  rule(ctx, left, right, y);
  y += 130;

  ctx.textAlign = "center";
  ctx.font = `700 54px ${MONO}`;
  spaced(ctx, "NO REFUNDS.", center, y, 4);
  y += 120;

  // A decorative barcode, generated from a fixed pattern.
  const barTop = y;
  const barH = 120;
  let bx = left + width * 0.12;
  const bEnd = right - width * 0.12;
  let s2 = 11;
  while (bx < bEnd) {
    s2 = (s2 * 48271) % 2147483647;
    const w = 3 + (s2 % 4) * 3;
    ctx.fillRect(bx, barTop, Math.min(w, bEnd - bx), barH);
    bx += w + 4 + (s2 % 3) * 3;
  }
  y += barH + 80;

  ctx.font = `400 38px ${MONO}`;
  ctx.fillText("fortitudostudios.com/january", center, y);

  return canvas;
}

/** Draw text with manual letter spacing (ctx.letterSpacing is not everywhere yet). */
function spaced(ctx: CanvasRenderingContext2D, text: string, cx: number, y: number, gap: number) {
  const chars = Array.from(text);
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + gap * (chars.length - 1);
  const align = ctx.textAlign;
  ctx.textAlign = "left";
  let x = cx - total / 2;
  chars.forEach((c, i) => {
    ctx.fillText(c, x, y);
    x += widths[i] + gap;
  });
  ctx.textAlign = align;
}

function rule(ctx: CanvasRenderingContext2D, left: number, right: number, y: number) {
  ctx.save();
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.setLineDash([14, 10]);
  ctx.beginPath();
  ctx.moveTo(left, y);
  ctx.lineTo(right, y);
  ctx.stroke();
  ctx.restore();
}

/**
 * "Label ......... value". When the value does not fit on the label's line it
 * drops to the next line(s), right-aligned, wrapped on spaces.
 */
function leaderRow(
  ctx: CanvasRenderingContext2D,
  label: string,
  value: string,
  left: number,
  right: number,
  y: number,
): number {
  const lineH = 56;
  const dot = ctx.measureText(".").width;
  const labelW = ctx.measureText(label + " ").width;
  const valueW = ctx.measureText(" " + value).width;
  ctx.textAlign = "left";
  ctx.fillText(label, left, y);

  if (labelW + valueW + dot * 3 <= right - left) {
    dots(ctx, left + labelW, right - valueW, y, dot);
    ctx.textAlign = "right";
    ctx.fillText(value, right, y);
    ctx.textAlign = "left";
    return y + lineH;
  }

  dots(ctx, left + labelW, right, y, dot);
  const lines = wrap(ctx, value, right - left);
  ctx.textAlign = "right";
  for (const line of lines) {
    y += lineH;
    ctx.fillText(line, right, y);
  }
  ctx.textAlign = "left";
  return y + lineH;
}

function dots(ctx: CanvasRenderingContext2D, from: number, to: number, y: number, dot: number) {
  const n = Math.max(0, Math.floor((to - from) / dot));
  ctx.fillText(".".repeat(n), from, y);
}

function wrap(ctx: CanvasRenderingContext2D, text: string, max: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (ctx.measureText(next).width > max && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Synchronous PNG File from a canvas, so navigator.share keeps the user gesture. */
export function canvasToFile(canvas: HTMLCanvasElement, filename = SLIP_FILENAME): File {
  const dataUrl = canvas.toDataURL("image/png");
  const bin = atob(dataUrl.split(",")[1]);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new File([bytes], filename, { type: "image/png" });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
