import { expect } from "@playwright/test";
class ProductAdd {
  async productAdd(page) {
    const searchBox = page.getByRole("searchbox", { name: "Search in Daraz" });
    await searchBox.click();
    await searchBox.fill("Samsung Galaxy s23");
    await searchBox.press("Enter");
    const productHeading = page.getByRole("heading", { name: "Samsung Galaxy s23" });
    await expect(productHeading).toBeVisible({ timeout: 10000 });
    await page.getByRole('link', { name: 'For itel S23 soft silicone' }).first().click();
    const addCartButton = page.getByRole('button', { name: 'Add to Cart' });
    await expect(addCartButton).toBeVisible({ timeout: 90000 });
    await addCartButton.click();
    const successMessage = page.locator('text=Added to cart successfully!');
    await expect(successMessage).toBeVisible({ timeout: 10000 });
    console.log("Product added to cart successfully");
  }
}

export default ProductAdd;
