import { expect } from "@playwright/test";

class ProductSearch {
  async productSearch(page) {
    const searchBox = page.getByRole("searchbox", { name: "Search in Daraz" });
    await searchBox.click();
    await searchBox.fill("Samsung Galaxy s23");
    await searchBox.press("Enter");
    const productHeading = page.getByRole("heading", { name: "Samsung Galaxy s23" });
    await expect(productHeading).toBeVisible({ timeout: 10000 });
  }
}

export default ProductSearch;
