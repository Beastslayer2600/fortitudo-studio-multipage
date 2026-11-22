import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { ALL_ROUTES } from "./routes";

// Fails on any serious or critical WCAG 2.1 A/AA violation. Automated scans
// catch roughly a third of issues; keyboard and screen-reader passes are
// still needed per template.
for (const route of ALL_ROUTES) {
  test(`axe: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    await page.waitForLoadState("networkidle");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const blocking = results.violations
      .filter((v) => v.impact === "serious" || v.impact === "critical")
      .map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        targets: v.nodes.slice(0, 5).map((n) => n.target.join(" ")),
      }));
    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
}
