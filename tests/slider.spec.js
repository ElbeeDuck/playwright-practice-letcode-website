const { test, expect } = require('@playwright/test');

test.describe('Slider tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/slider');
        await expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Move the slider and get the countries and validate them', async ({ page }) => {
        const sliderTrack = page.locator('#generate');
        const sliderTrackBox = await sliderTrack.boundingBox();
        const { x, y, width, height } = sliderTrackBox; // Extract slider details
        const getCountriesButton = await page.getByRole('button', { name: 'Get Countries' });


        await page.mouse.move(x, y + height / 2); // Move to slider start
        await page.mouse.down();
        await page.mouse.move(x + width / 2, y + height / 2, { steps: 10 }); // Drag to middle
        await page.mouse.up();

        await getCountriesButton.click();

        const noOfCountries = await page.getByRole('heading', { name: 'Word limit :' }).textContent();
        console.log(noOfCountries);
        const countryString = await page.locator('.notification').textContent();
        console.log(countryString);
        // Split, trim, and log country names
        let countryArray = countryString.split("-").map(country => country.trim());
        console.log("Processed country list:", countryArray);
    });

});