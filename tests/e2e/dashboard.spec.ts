import { expect, test } from "@playwright/test";
test("shows the Batchflow dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(page.getByRole("button", { name: /New import/i })).toBeVisible();
});
