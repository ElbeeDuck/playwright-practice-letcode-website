const { test, expect } = require('@playwright/test');

test.describe('Elements tests', () => {

    test.beforeEach('Go to url', async ({ page }) => {
        await page.goto('https://letcode.in/elements');
        expect(page).toHaveTitle('LetCode with Koushik');

    });
    test('Find elements, assert for image and assert for repo no', async ({ page }) => {

        //Type and Enter your Git username
        const usernameTextField = await page.getByPlaceholder('Enter your git user name eg');
        const searchButton = await page.getByRole('button', { name: 'Search' });
        const usernamepage = await page.locator('app-usercard').getByText('Koushik Chatterjee');
        await usernameTextField.fill('ortonikc');
        await searchButton.click();

        //Assert that user has image
        await expect(page.getByRole('img', { name: 'Placeholder image' })).toBeVisible();
        //Print the user name & other informations
        await expect(page.locator('app-usercard')).toContainText('Koushik Chatterjee');
        console.log(await page.locator('app-usercard').allTextContents());
        await expect(page.locator('app-usercard')).toContainText('Chennai, Tn, India');
        await expect(page.locator('app-usercard')).toContainText('Youtuber - 32k+ subscribers.');

        //Assert that no.of public repositories are listed correctly
        const repoLinks = await page.locator('selector-for-repository-links').count(); 
        //eg. if Public Repos has 10 then in the list 10 links should be available 
    });
});