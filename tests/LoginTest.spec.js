import { test } from "@playwright/test";
import logData from "../fixtures/logData.json" assert { type: "json" };
import AuthLogout from "../Pages/Auth/Logout";
import AuthLogin from "../Pages/Auth/Login";

test.describe("Daraz order test", () => {
  test("Daraz login test", async ({ page }) => {
    await page.goto(logData.link, { waitUntil: "domcontentloaded", timeout: 90000 });
    const authlogin = new AuthLogin();
    await authlogin.authLogin(page);
  });
  test("Daraz logout test", async ({ page }) => {
    const authlogout = new AuthLogout();
    await authlogout.authLogout(page);
  });
});
