import { expect, test } from "@playwright/test";
import { ALL_ROUTES } from "./routes";

for (const route of ALL_ROUTES) {
  test(`renders: ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const res = await page.goto(route);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    expect(await page.locator("main").count()).toBe(1);
    expect(errors).toEqual([]);
  });
}

test("skip link is the first focusable element and moves focus to main", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium");
  await page.goto("/about");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main#main")).toBeFocused();
});

test("contact form shows a focused alert when the server rejects it", async ({ page }) => {
  await page.route("**/api/contact", (r) =>
    r.fulfill({ status: 429, contentType: "application/json", body: JSON.stringify({ ok: false, error: "rate_limited", message: "Too many messages." }) }),
  );
  await page.goto("/contact");
  await page.getByLabel("Full name").fill("Test");
  await page.getByLabel("Email address").fill("t@example.com");
  await page.getByLabel("Message").fill("Hello");
  await page.getByRole("button", { name: "Send Message" }).click();
  const alert = page.locator("form [role=alert]");
  await expect(alert).toHaveText("Too many messages.");
  await expect(alert).toBeFocused();
});
