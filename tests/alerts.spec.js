const { test, expect } = require('@playwright/test');

test.describe('Alert tests', () => {

    test.beforeEach('Go to url', async ({ page }) => {
        await page.goto('https://letcode.in/alert');
        expect(page).toHaveTitle('LetCode with Koushik');

    });
    test('Accept the alert', async ({ page }) => {
        await page.on('dialog', dialog => dialog.accept());
        const simpleAlertButton = await page.locator('#accept');
        await simpleAlertButton.click();
    });
    test('Dismiss the Alert & print the alert text', async ({ page }) => {
        page.on('dialog', async dialog => {
            console.log(dialog.message()); // logs the alert message
            await dialog.dismiss(); // dismiss the alert
        });

        const confirmAlertButton = await page.locator('#confirm');
        await confirmAlertButton.click();
    });
    test('Type your name & accept', async ({ page }) => {
        //event listener
        page.on('dialog', async dialog => {
            console.log(dialog.message()); // logs the alert message
            await dialog.accept('Elbee'); // accept the alert
        });

        const confirmAlertButton = await page.locator('#prompt');
        await confirmAlertButton.click();
        console.log(await page.locator('#myName').textContent());
    });

    test('Sweet/Modern alert', async ({ page }) => {
        const sweetAlertButton = await page.locator('#modern');
        const closeAlertButton = await page.getByLabel('close');
        await sweetAlertButton.click();
        await closeAlertButton.click();
    });
});