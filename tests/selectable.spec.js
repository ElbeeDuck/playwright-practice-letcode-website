const { test, expect } = require('@playwright/test');

test.describe('Selectable tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/selectable');
        await expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Selectable test for all items in list', async ({ page }) => {

        for (let i = 0; i < 9; i++) {
            await page.locator('#clour').nth(i).click({ modifiers: ['ControlOrMeta'] });
        }
    });

    test('Selectable test for some items in list', async ({ page }) => {
        await page.getByRole('heading', { name: 'Selenium' }).click({ modifiers: ['ControlOrMeta'] });
        await page.getByRole('heading', { name: 'Webdriver.io' }).click({ modifiers: ['ControlOrMeta'] });
        await page.getByRole('heading', { name: 'Cypress' }).click({ modifiers: ['ControlOrMeta'] });
    });

});