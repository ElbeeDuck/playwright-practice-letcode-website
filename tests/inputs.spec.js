const { test, expect } = require('@playwright/test');
const { InputsPage } = require('../pages/inputsPage');

test.describe('Test inputs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/edit');
        await expect(page).toHaveTitle('Interact with Input fields');
    });

    test('Learn how to handle input fields', async ({ page }) => {
        const inputsPage = new InputsPage(page);
        //Enter a full name into textbox
        await inputsPage.enterFullName('Elbee Duck');
        //Append a text and press keyboard tab
        await inputsPage.appendTextAndTab(' at everything');
        //Return what is inside a textbox
        const textBoxText = await inputsPage.getTextBoxContent();
        console.log(textBoxText);
        await expect(textBoxText).toBe('ortonikc');
        //Clear the text
        const clearTextBox = await inputsPage.clearTextBox();
        await expect(clearTextBox).toBeUndefined();
        //Confirm an edit field is disabled
        const fieldDisabled = await inputsPage.confirmDisabled();
        await expect(fieldDisabled).toBeDisabled();
        //Confirm edit field is readonly
        const fieldReadOnly = await inputsPage.confirmReadOnly();
        await expect(fieldReadOnly).not.toBeEditable();
    });
});
