import { test, expect } from '@playwright/test';
import { AccountLoginPage } from '../Pages/AccountLoginPage.js';
import { LogoutPage } from '../Pages/LogoutPage.js';

test('User can logout successfully', async ({ page }) => {
  const login = new AccountLoginPage(page);
  const logout = new LogoutPage(page);

  // Step 1: Login
  await login.gotoLoginPage();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  // Step 2: Logout
  await logout.logout();

  // Step 3: Verify user is back on login page
  expect(await logout.isOnLoginPage()).toBeTruthy();
});
