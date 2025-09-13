import { BasePage } from './BasePage.js';

export class ProductCartPage extends BasePage {
  constructor(page) {
    super(page);
    this.addToCartBtn = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
    this.cartItemName = '.cart_item .inventory_item_name';
  }

  async addProductToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async getCartProductName() {
    return await this.page.textContent(this.cartItemName);
  }
}
