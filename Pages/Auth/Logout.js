import { expect } from "@playwright/test";
class AuthLogout {
  async authLogout(page) {
    const accountElement = page.getByText("*******841's account");
    await accountElement.waitFor({ state: "visible", timeout: 10000 });
    await accountElement.click();
    const logoutElement = page.getByText("Logout");
    await expect(logoutElement).toBeVisible({ timeout: 10000 });
    await logoutElement.click();
    const loginElement = page.getByText("Login");
    await expect(loginElement).toBeVisible({ timeout: 10000 });
    console.log("Login option is visible: Logout verified successfully");
  }
}

export default AuthLogout;
