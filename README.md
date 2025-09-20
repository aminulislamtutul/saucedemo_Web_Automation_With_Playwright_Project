# **Saucedemo Web Automation With Playwright Project**
## About Project
This project is an E-Commerce Website Test Automation Framework built with Playwright and JavaScript, following the Page Object Model (POM) design pattern.
## Features
- User Login (valid & invalid credentials)
- Add to Cart & Cart validation
- Checkout flow (positive & negative test cases)
- Logout functionality
- Allure report
## Tech Stack
- Playwright
- JavaScript (ESM modules)
- Page Object Model (POM)
- Allure Test Report and Playwright HTML Report
## Project Structure
```
ecommerce-automation/
│── Pages/               # Page Object Model classes
│   ├── AccountLoginPage.js
│   ├── ProductCartPage.js
│   ├── CheckoutPage.js
│── tests/               # Test files
│   ├── TestAccountLoginPage_TC001.spec.js
│   ├── cart.test.js
│   ├── checkout.test.js
│   ├── logout.test.js
│── playwright.config.js # Playwright configuration
│── package.json
│── README.md
```
## Installation & Setup
1. Clone the repository:
```console
https://github.com/aminulislamtutul/saucedemo_Web_Automation_With_Playwright_Project.git
```
2. Install dependencies:
```console
npm install
```
3. Run tests:
```console
npx playwright test
```
4. Open HTML report:
```console
npx playwright show-report
```
5. Install Allure report:
```console
npm install -D allure-playwright
```
6. Generate Allure report:
```console
allure generate ./allure-results -o ./allure-report
```
7. Open Allure report:
```console
allure open ./allure-report
```
8. Open Playwright report:
```console
npx playwright show-report
```
## Allure Reports
<img width="949" height="479" alt="Screenshot 2025-09-13 214715" src="https://github.com/user-attachments/assets/ce254722-faa3-49a8-b0b9-d15e6193bb0e" />
<img width="947" height="479" alt="Screenshot 2025-09-13 214804" src="https://github.com/user-attachments/assets/6cba4e62-42ad-4afa-a884-afe54617e164" />

## Playwright HTML Report
<img width="949" height="479" alt="Playwright HTML Report" src="https://github.com/user-attachments/assets/6ad89806-595a-4b66-8864-6cb17f9d756f" />


## Future Enhancements
- Add product search & filter tests
- Validate order history after checkout
- Add CI/CD pipeline integration




