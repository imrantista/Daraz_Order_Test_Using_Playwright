import { expect } from "@playwright/test";
import ProductAdd from "./AddProduct"; 
class ProductRemove {
  async productRemove(page) {
    const addproduct = new ProductAdd()
    await addproduct.productAdd(page)
    const productImage = page.getByRole('link', { name: '3', exact: true }).getByRole('img');
    await expect(productImage).toBeVisible({ timeout: 10000 });
    await productImage.click();
    const deleteButton = page.locator('#item_i19e99ea93 > .cart-item-inner > .cart-item-middle > .operations > .automation-btn-delete > .lazada');
    await expect(deleteButton).toBeVisible({ timeout: 10000 });
    await deleteButton.click();
    const removeConfirm = page.getByRole('button', { name: 'REMOVE' });
    await expect(removeConfirm).toBeVisible({ timeout: 10000 });
    await removeConfirm.click();
    const checkoutButton = page.getByRole('button', { name: 'PROCEED TO CHECKOUT (0)' });
    await expect(checkoutButton).toBeVisible({ timeout: 10000 });
    await checkoutButton.click();
    console.log("Product removed from cart successfully");
  }
}

export default ProductRemove;
