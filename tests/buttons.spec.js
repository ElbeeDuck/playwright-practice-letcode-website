const { test, expect } = require('@playwright/test');
const { ButtonsPage } = require('../pages/buttonsPage');

test.describe('Button tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/buttons');
        expect(page).toHaveTitle('Interact with Button fields');
    });

    test('Navigate to Home and back', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        await buttonsPage.goToHomePage();
        await expect(page).toHaveTitle('LetCode with Koushik');
        await page.goBack();
        await expect(page).toHaveTitle('Interact with Button fields');
    });

    test('Get the X & Y co-ordinates', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        const box = await buttonsPage.findCoordinates();
        console.log('X coord is: ' + box.x, ' and Y coord is: ' + box.y);
        expect(box).not.toBeNull();
    });

    test('Find the color of the button', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        const color = await buttonsPage.findButtonColor();
        console.log(`Button color: ${color}`);
        expect(color).toBe('rgb(255, 255, 255)');
    });

    test('Find the background color of the button', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        const backgroundColor = await buttonsPage.findButtonBackgroundColor();
        console.log(`Button background color: ${backgroundColor}`);
        expect(backgroundColor).toBe('rgb(138, 77, 118)');
    });

    test('Find the height & width of the button', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        const size = await buttonsPage.findHeightAndWidthButton();
        console.log(`Width = ${size.width}, Height = ${size.height}`);
        expect(size).not.toBeNull();
        expect(size?.width).toBeGreaterThan(0);
        expect(size?.height).toBeGreaterThan(0);
    });

    test('Confirm the button is disabled', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        const disabled = await buttonsPage.isButtonDisabled();
        expect(disabled).toBeTruthy();
    });

    test('Click and hold the button', async ({ page }) => {
        const buttonsPage = new ButtonsPage(page);
        await buttonsPage.clickAndHoldButton();
        //add assertions 
    });

});