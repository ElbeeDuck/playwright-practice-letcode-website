const { test, expect } = require('@playwright/test');
const { InputsPage } = require('../pages/inputsPage');

test.describe('Test inputs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/edit');
        await expect(page).toHaveTitle('Interact with Input fields');
    });

    test('Enter your full Name', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        await inputsPage.enterFullName('Elbee Duck');
    });

    test('Append a text and press keyboard tab', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        await inputsPage.appendTextAndTab(' at everything');
    });

    test('Return what is inside a textbox', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        const textBoxText = await inputsPage.getTextBoxContent();
        console.log(textBoxText);
        await expect(textBoxText).toBe('ortonikc');
    });

    test('Clear the text', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        const clearTextBox = await inputsPage.clearTextBox();
        await expect(clearTextBox).toBeUndefined();
    });

    test('Confirm an edit field is disabled', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        const fieldDisabled = await inputsPage.confirmDisabled();
        await expect(fieldDisabled).toBeDisabled();
    });

    test('Confirm edit field is readonly', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        const fieldReadOnly = await inputsPage.confirmReadOnly();
        await expect(fieldReadOnly).not.toBeEditable();
    });
});
