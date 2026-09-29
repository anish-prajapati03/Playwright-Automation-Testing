// @ts-check
const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const users = require('../data/users');
const constants = require('../data/constants');

let loginPage;

test.beforeEach(async ({page})=> {
  loginPage = new LoginPage(page);
  await loginPage.open();
})

// test case-1 login scenario
test('user can login with valid credentials @smoke', async({page})=>{
  await page.goto('/');
  await page.getByPlaceholder('Username').fill(users.standardUser.username);
  await page.getByPlaceholder('Password').fill(users.standardUser.password);
  
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page).toHaveURL(constants.urls.inventary);
  await expect(page.locator('.title')).toHaveText(constants.text.productTitle);
});