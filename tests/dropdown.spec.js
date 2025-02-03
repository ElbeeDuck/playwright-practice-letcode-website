const { test, expect } = require('@playwright/test');
const { DropdownPage } = require('../pages/dropdownPage');

test.describe('Dropdown interactions', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/dropdowns');
        await expect(page).toHaveTitle('LetCode with Koushik');
    });
    //select an option from the dropdown
    test('Select the Apple using visible text', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);
        const fruit = 'Apple';
        const response = await dropdownPage.selectFruit(fruit);
        expect(response).toContain('Apple');
    });
    //select multiple options from a dropdown
    test('Select your super heros', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);
        const superHeroOptions = [
            { label: 'Captain Marvel' },
            { label: 'Doctor Strange' },
            { label: 'Thor' },
            { label: 'Wonder Woman' },
            { value: 'bw' },
            { index: 8 }
        ];
        await dropdownPage.selectSuperHeros(superHeroOptions);
    });
    //select the last items from a dropdown
    test('Select the last programming language and print all the options', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);
        const selectedLanguage = await dropdownPage.selectLastLanguage();
        await expect(page.locator('.subtitle')).toContainText(`You have selected ${selectedLanguage}`);
    });
    //select an item using the value
    test('Select India using value & print the selected value', async ({ page }) => {
        const dropdownPage = new DropdownPage(page);
        const country = 'India'
        const response = await dropdownPage.selectCountry(country);
        expect(response).toBe(country);
    });
});