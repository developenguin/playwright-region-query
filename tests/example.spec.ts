import { test, expect } from '@playwright/test';

test('query for section with title', async ({ page }) => {
  // CodeSandbox URL: https://codesandbox.io/s/proud-dew-ymrxn4?file=/index.html
  await page.goto('https://ymrxn4.csb.app/');

  await expect(page.getByRole("region", { name: "WWF History" })).toHaveCount(1);
});

test("query for section without title", async ({ page }) => {
  await page.goto('https://ymrxn4.csb.app/');

  await expect(page.getByRole("Section")).toHaveCount(1);
})
