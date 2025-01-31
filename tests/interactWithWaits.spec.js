const { test, expect } = require('@playwright/test');

test.describe('Interact with waits', () => {

    test.beforeEach('Go to url', async ({ page }) => {
        await page.goto('https://letcode.in/waits');
        await expect(page).toHaveTitle('LetCode with Koushik');
    })

    test('Wait for alert and accept', async ({ page }) => {
        const alertButton = page.getByRole('button', { name: 'Simple Alert' });

        const dialogPromise = page.waitForEvent('dialog');
        alertButton.click();

        //wait for the dialog to appear
        const dialog = await dialogPromise;
        console.log(`Dialog message: ${dialog.message()}`);

        //accept the dialog
        await dialog.accept();
    });
});