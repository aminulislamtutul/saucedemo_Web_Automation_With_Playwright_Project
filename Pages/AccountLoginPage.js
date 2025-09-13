import { BasePage } from './BasePage.js';

export class AccountLoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginBtn = '#login-button';
    this.errorMessage = '.error-message-container';
  }

  async gotoLoginPage() {
    await this.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}
