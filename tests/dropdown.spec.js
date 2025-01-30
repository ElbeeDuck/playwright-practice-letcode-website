const { test, expect } = require('@playwright/test');

//select an option from the dropdown
//select multiple options from a dropdown
//select the last items from a dropdown
//select an item using the value
test.describe('Dropdown interactions', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/dropdowns');
        expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Select the Apple using visible text', async ({ page }) => {
        const fruitList = await page.locator('#fruits');
        await fruitList.selectOption('Apple');
        const string = await page.locator('.subtitle').textContent();
        expect(string).toContain('Apple');
    });
    test('Select your super heros', async ({ page }) => {
        const multipleValueLocator = await page.locator('#superheros');
        await multipleValueLocator.selectOption([
            {label: 'Captain Marvel'}, 
            {label: 'Doctor Strange'}, 
            {label: 'Thor'}, 
            {label: 'Wonder Woman'},
            {value: 'bw'},
            {index: 8}]);
    });
    test('Select the last programming language and print all the options', async ({ page }) => {
        const languageList = await page.locator('#lang');
        const listOfLanguages = await languageList.locator('option').allTextContents();
        const lastLanguage = listOfLanguages[listOfLanguages.length - 1];
        await languageList.selectOption({ label: lastLanguage });
        console.log(listOfLanguages);
    });
    test('Select India using value & print the selected value', async ({ page }) => {
        const country = await page.selectOption('#country', {value: 'India'});
        console.log('Country selected: ', country);
    });
});