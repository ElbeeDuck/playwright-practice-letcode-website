const { test, expect } = require('@playwright/test');

test.describe('Interact with different types of frames/iframes', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/frame');
        await expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Enter details', async ({ page }) => {
        // Locate element inside frame
        const outerFrame = await page.locator('iframe[name="firstFr"]').contentFrame();
        if (!outerFrame) throw new Error('Outer frame not found');
        
        const firstname = await outerFrame.getByPlaceholder('Enter name');
        const surname = await outerFrame.getByPlaceholder('Enter email');

        await firstname.fill('Elbee');
        await surname.fill('Duck');

        let enteredText = await firstname.inputValue();
        enteredText += " ";
        enteredText += await surname.inputValue();
        expect(enteredText).toBe('Elbee Duck');
    });

    test('Inner Frame', async ({ page }) => {
        const innerFrame = await page.frame({ url: /innerFrame/ });
        if (!innerFrame) throw new Error('Outer frame not found');
        
        const emailInput = await innerFrame.getByPlaceholder('Enter email');
        await emailInput.fill('elbee@duck.com');

        const enteredEmail = await emailInput.inputValue();
        expect(enteredEmail).toBe('elbee@duck.com');
    });
});