const { test, expect } = require('@playwright/test');

test.describe('Radio & Checkbox tests', () => {

    test.beforeEach('Go to url', async ({ page }) => {
        await page.goto('https://letcode.in/radio');
        await expect(page).toHaveTitle('LetCode with Koushik');
    })

    test('Select radio button', async ({ page }) => {
        await page.getByRole('radio', { name: 'Yes' }).first().click();
        await expect(page.getByRole('radio', { name: 'Yes' }).first()).toBeChecked();
    });

    test('Confirm you can select only one radio button', async ({ page }) => {
        await page.getByRole('radio', { name: 'No' }).nth(1).click();
        await expect(page.getByRole('radio', { name: 'No' }).nth(1)).toBeChecked();
        await expect(page.getByText('Yes').nth(1)).not.toBeChecked();
    });

    test('Find the bug', async ({ page }) => {
            const radioYes = await page.getByRole('radio', { name: 'Yes' }).nth(2);
            const radioNo = await page.getByRole('radio', { name: 'No' }).nth(2);
        
            // Click the "No" radio button
            await radioNo.click();
            // Verify "No" is selected and "Yes" is not selected
            await expect(radioNo).toBeChecked();
            await expect(radioYes).not.toBeChecked();
        
            // Click the "Yes" radio button
            await radioYes.click();
            // Verify "Yes" is selected and "No" is not selected
            await expect(radioYes).toBeChecked();
            await expect(radioNo).not.toBeChecked();
    });

    test('Which radio button is selected', async ({ page }) => {
        if (await page.getByRole('radio', { name: 'Foo' }).isChecked()) {
            await expect(page.getByText('Foo')).toBeChecked();
            console.log('Foo is selected');
        } else {
            await expect(page.getByRole('radio', { name: 'Bar' })).toBeChecked();
            console.log('Bar is selected');
        }
    });
    test('Confirm last field is disabled', async ({ page }) => {
        await expect(page.getByRole('radio', { name: 'Maybe' })).toBeDisabled();
    });

    test('Find if the checkbox is selected?', async ({ page }) => {
        await expect(page.getByText('Remember me')).toBeChecked();
    });

    test('Accept the T&C', async ({ page }) => {
        await page.getByText('I agree to the FAKE terms and').click();
        await expect(page.getByText('I agree to the FAKE terms and')).toBeChecked();
    });
});