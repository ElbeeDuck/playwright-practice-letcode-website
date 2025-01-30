const { test, expect } = require('@playwright/test');

//Enter a full name into textbox
//Append test and press tab button
//Return what is inside a textbox
//Confirm an edit field is disabled
//Confirm text is read only
test.describe('Test inputs', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/edit');
        await expect(page).toHaveTitle('Interact with Input fields');
    });
    
    test('Learn how to handle input fields', async ({ page }) => {
        //Enter your full Name
        await page.getByPlaceholder('Enter first & last name').fill('Elbee Duck');
        //Append a text and press keyboard tab
        const initialText = await page.locator('#join').inputValue();
        
        await page.locator('#join').fill(initialText + ' at everything');
        await page.keyboard.press('Tab');

        const textBoxText = await page.locator('#getMe').inputValue();
        console.log(textBoxText);
        await expect(textBoxText).toBe('ortonikc');

        await page.locator('#clearMe').clear();
        await expect(page.locator('#noEdit')).toBeDisabled();

        const textLocator = page.locator('#dontwrite');
        await expect(textLocator).not.toBeEditable();
    });


});
