const { test, expect } = require('@playwright/test');

test.describe('General Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/inputs");
        await expect(page).toHaveTitle('Web inputs page for Automation Testing Practice');
    });

    test('Page Load Verification', async ({ page }) => {
        // Navigate to the Inputs page.
        //await page.goto("https://practice.expandtesting.com/inputs");
        // Check that the page title is correct.
        //await expect(page).toHaveTitle('Web inputs page for Automation Testing Practice');
        // Verify that all input elements are visible.
        await expect(page.getByLabel('Input: Number')).toBeVisible();
        await expect(page.getByLabel('Input: Text')).toBeVisible();
        await expect(page.getByLabel('Input: Password')).toBeVisible();
        await expect(page.getByLabel('Input: Date')).toBeVisible();
    });

    test(' Verify the functionality of a text input field', async ({ page }) => {
        // Locate the text input field.
        const textField = await page.getByLabel('Input: Text');
        // Type a valid string (e.g., "Test input").
        await textField.fill('Hello');
        // Verify that the typed text appears correctly.
        await expect(textField).toHaveValue('Hello');
    });

    test('Verify that the number input field accepts valid numbers.', async ({ page }) => {
        const numberField = await page.getByLabel('Input: Number');
        //Enter a valid number (e.g., 123).
        await numberField.fill('123');
        //Verify that the number appears in the input field.
        await expect(numberField).toHaveValue('123');
    });

    test(' Ensure the number input field rejects invalid inputs (e.g., letters or special characters).', async ({ page }) => {
        const numberField = await page.getByLabel('Input: Number');
        try {
            //Attempt to enter letters or special characters into the number input field.
            //Observe the behavior of the input field.
            await numberField.fill('abc');
        } catch {
    
            await expect(numberField).toBeEmpty();
        }
        try {
            await numberField.fill('@-#');
        } catch {
    
            await expect(numberField).toBeEmpty();
        }
    });

});