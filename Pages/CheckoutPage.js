import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.checkoutBtn = '#checkout';
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
    this.successMessage = '.complete-header';
  }

  async startCheckout() {
    await this.page.click(this.checkoutBtn);
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueBtn);
  }

  async finishCheckout() {
    await this.page.click(this.finishBtn);
  }

  async getSuccessMessage() {
    return await this.page.textContent(this.successMessage);
  }
}
