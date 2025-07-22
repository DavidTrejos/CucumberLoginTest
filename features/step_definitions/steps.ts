import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from 'playwright';
import { Page } from 'playwright';

let page: Page;
//Arrange
Given('the user navigates to the login page', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/login');
});
//Act
When('the user enters invalid credentials', async () => {
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword');
});

When('the user enters valid credentials', async () => {
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
});

When('clicks the login button', async () => {
  await page.click('button[type="submit"]');
});
//Assert 
Then('the user should be stay in login', async () => {
  await page.waitForURL('**/login');
  expect(page.url()).toContain('/login');
});

Then('the user should be redirected to the dashboard', async () => {
  await page.waitForURL('**/secure');
  expect(page.url()).toContain('/secure');
});