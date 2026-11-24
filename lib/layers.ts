// Pure logic for /guides/life-in-layers. No DOM, no storage.
export const RETIRE = 65

// [ISO date, label, priority]. Higher priority survives label collisions.
export const EVENTS: ReadonlyArray<readonly [string, string, number]> = [
  ['1969-07-20', 'Moon landing', 1],
  ['1987-10-19', 'Black Monday crash', 3],
  ['1990-02-11', 'Mandela walks free', 2],
  ['1994-04-27', 'First democratic election', 3],
  ['1995-06-24', 'Springboks win the World Cup', 1],
  ['2000-03-10', 'Dot-com bubble bursts', 2],
  ['2007-06-29', 'First iPhone goes on sale', 1],
  ['2008-09-15', 'Lehman Brothers collapses', 3],
  ['2010-06-11', 'SA hosts the World Cup', 2],
  ['2019-11-02', 'Springboks win in Japan', 1],
  ['2020-03-27', 'National lockdown begins', 3],
  ['2023-10-28', 'Springboks win back-to-back', 1],
  ['2024-09-01', 'Two-pot retirement starts', 3],
]

const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function fmtDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MON[m - 1]} ${y}`
}

/** 483 -> "483", 1234 -> "1 234" */
export function nf(n: number): string {
  return n.toLocaleString('en-ZA').replace(/[\s ,]/g, ' ')
}

export type Moment = { text: string; year: number }
export type MomentInput = { text: string; year: string }

export type LayersState = {
  dob: string
  by: number
  now: Date
  age: number
  layer: number
  left: number
  months: number
  workUsed: number
  moments: Moment[]
}

export function compute(dob: string, momentInputs: MomentInput[], now = new Date()): LayersState | null {
  if (!dob) return null
  const [by, bm, bd] = dob.split('-').map(Number)
  if (!by || !bm || !bd) return null
  const birth = new Date(by, bm - 1, bd)
  if (isNaN(birth.getTime()) || birth > now || by < 1940) return null

  let age = now.getFullYear() - by
  if (now < new Date(now.getFullYear(), bm - 1, bd)) age--

  const r65 = new Date(by + RETIRE, bm - 1, bd)
  let months = (r65.getFullYear() - now.getFullYear()) * 12 + (r65.getMonth() - now.getMonth())
  if (r65.getDate() < now.getDate()) months--
  months = Math.max(0, months)

  const workUsed = Math.min(100, Math.max(0, Math.round(((age - 18) / (RETIRE - 18)) * 100)))

  const moments = momentInputs
    .map((m) => ({ text: m.text.trim(), year: parseInt(m.year, 10) }))
    .filter((m) => m.text && m.year >= by && m.year <= by + RETIRE)

  return { dob, by, now, age, layer: age + 1, left: Math.max(0, RETIRE - age), months, workUsed, moments }
}

export type LabelKind = 'me' | 'world' | 'now' | 'future'
export type Label = { y: number; text: string; sub: string; kind: LabelKind; pr?: number }

export function buildLabels(s: LayersState): Label[] {
  const L: Label[] = []
  L.push({ y: s.by, text: 'Born', sub: fmtDate(s.dob), kind: 'me' })
  EVENTS.forEach(([d, t, pr]) => {
    const y = +d.slice(0, 4)
    if (y > s.by && y < s.now.getFullYear() + 1) L.push({ y, text: t, sub: fmtDate(d), kind: 'world', pr })
  })
  s.moments.forEach((m) => L.push({ y: m.year, text: m.text, sub: String(m.year), kind: 'me' }))
  L.push({ y: s.now.getFullYear(), text: 'You are here', sub: `Layer ${s.layer}`, kind: 'now' })
  ;[30, 40, 50].forEach((a) => {
    if (a > s.age) L.push({ y: s.by + a, text: `You turn ${a}`, sub: String(s.by + a), kind: 'future' })
  })
  L.push({ y: s.by + RETIRE, text: 'Sixty-five', sub: String(s.by + RETIRE), kind: 'future' })
  return L
}

export type Placed = Label & { ty: number; ay: number }

/**
 * Push labels up so they keep `gap` apart (bottom-first), then drop the
 * lowest-priority world events until nothing is pushed off the top.
 */
export function layoutLabels(
  labels: Label[],
  yOf: (year: number) => number,
  lh: number,
  gap: number,
): Placed[] {
  let L = [...labels].sort((a, b) => yOf(b.y) - yOf(a.y))
  const layout = (arr: Label[]): Placed[] => {
    let lastY = Infinity
    return arr.map((l) => {
      let ty = yOf(l.y) + lh / 2
      if (ty > lastY - gap) ty = lastY - gap
      lastY = ty
      return { ...l, ty, ay: yOf(l.y) + lh / 2 }
    })
  }
  let placed = layout(L)
  while (placed.some((l) => l.ty < 10)) {
    const world = L.filter((l) => l.kind === 'world')
    if (!world.length) break
    const drop = world.reduce((a, b) => ((b.pr ?? 0) < (a.pr ?? 0) || ((b.pr ?? 0) === (a.pr ?? 0) && b.y < a.y) ? b : a))
    L = L.filter((l) => l !== drop)
    placed = layout(L)
  }
  return placed
}
