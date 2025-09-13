import { BasePage } from './BasePage.js';

export class LogoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.menuBtn = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async logout() {
    await this.page.click(this.menuBtn);
    await this.page.click(this.logoutLink);
  }

  async isOnLoginPage() {
    return await this.page.url() === 'https://www.saucedemo.com/';
  }
}
