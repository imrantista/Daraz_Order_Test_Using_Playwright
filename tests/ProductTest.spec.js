import { test } from "@playwright/test";
import logData from "../fixtures/logData.json" assert { type: "json" };
import AuthLogin from "../Pages/Auth/Login";
import ProductSearch from "../Pages/Product/SearchProduct";
import ProductAdd from "../Pages/Product/AddProduct";
import ProductRemove from "../Pages/Product/RemoveProduct";

test.describe("Daraz order test", () => {
  const loginsession = new AuthLogin();

  test.beforeEach(async ({ page }) => {
    await page.goto(logData.link, { waitUntil: "domcontentloaded", timeout: 90000 });
    await loginsession.authLogin(page);
  });

  test("Search Product", async ({ page }) => {
    const searchProduct = new ProductSearch();
    await searchProduct.productSearch(page);
  });

  test("Add Product", async ({ page }) => {
    const addProduct = new ProductAdd();
    await addProduct.productAdd(page);
  });
  test ("remove Product", async ({ page }) => {
    const removeproduct = new ProductRemove();
    await removeproduct.productRemove(page);
  });
});
