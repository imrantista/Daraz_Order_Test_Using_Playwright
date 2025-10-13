import { expect } from "@playwright/test";
import logData from "../../fixtures/logData.json" assert { type: "json" };

class AuthLogin {
  async authLogin(page, { username, password } = logData) {
    await page.getByRole("link", { name: "Login" }).click();
    const usernameInput = page.getByRole("textbox", { name: "Please enter your Phone" });
    await usernameInput.waitFor({ state: "visible", timeout: 10000 });
    await usernameInput.fill(username);
    const passwordInput = page.getByRole("textbox", { name: "Please enter your password" });
    await passwordInput.waitFor({ state: "visible", timeout: 10000 });
    await passwordInput.fill(password);
    const loginButton = page.getByRole("button", { name: "LOGIN" });
    await Promise.all([
      page.waitForNavigation({ waitUntil: "domcontentloaded", timeout: 90000 }),
      loginButton.click(),
    ]);
    const accountElement = page.getByText("*******841's account");
    await accountElement.waitFor({ state: "visible", timeout: 10000 });
    await accountElement.click();
    const logoutElement = page.getByText("Logout");
    await expect(logoutElement).toBeVisible({ timeout: 10000 });
    console.log("Logout option is visible: Login verified successfully");
  }
}

export default AuthLogin;
