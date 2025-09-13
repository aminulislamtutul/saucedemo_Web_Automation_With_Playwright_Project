import { test, expect } from '@playwright/test';
import { AccountLoginPage } from '../Pages/AccountLoginPage.js';
import { ProductCartPage } from '../Pages/ProductCartPage.js';

test('Add product to cart', async ({ page }) => {
  const login = new AccountLoginPage(page);
  const cart = new ProductCartPage(page);

  await login.gotoLoginPage();
  await login.login('standard_user', 'secret_sauce');

  await cart.addProductToCart();
  await cart.goToCart();

  expect(await cart.getCartProductName()).toBe('Sauce Labs Backpack');
});
