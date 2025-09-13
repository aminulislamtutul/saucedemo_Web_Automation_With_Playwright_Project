import { test, expect } from '@playwright/test';
import { AccountLoginPage } from '../Pages/AccountLoginPage.js';
import { ProductCartPage } from '../Pages/ProductCartPage.js';
import { CheckoutPage } from '../Pages/CheckoutPage.js';

test('User can checkout a product', async ({ page }) => {
  const login = new AccountLoginPage(page);
  const cart = new ProductCartPage(page);
  const checkout = new CheckoutPage(page);

  // Step 1: Login
  await login.gotoLoginPage();
  await login.login('standard_user', 'secret_sauce');

  // Step 2: Add product to cart
  await cart.addProductToCart();
  await cart.goToCart();

  // Step 3: Start checkout
  await checkout.startCheckout();
  await checkout.fillCheckoutDetails('Aminul', 'Islam', '12345');
  await checkout.finishCheckout();

  // Step 4: Verify order success
  expect(await checkout.getSuccessMessage()).toBe('Thank you for your order!');
});
