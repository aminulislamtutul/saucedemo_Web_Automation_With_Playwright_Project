import { test, expect } from '@playwright/test';
import { AccountLoginPage } from '../Pages/AccountLoginPage.js';

test('Login with valid credentials', async ({ page }) => {
  const login = new AccountLoginPage(page);
  await login.gotoLoginPage();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('Login with invalid credentials', async ({ page }) => {
  const login = new AccountLoginPage(page);
  await login.gotoLoginPage();
  await login.login('invalid_user', 'wrong_pass');
  expect(await login.getErrorMessage()).toContain('Epic sadface: Username and password do not match any user in this service');
});
