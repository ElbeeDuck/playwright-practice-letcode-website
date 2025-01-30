const { test, expect } = require('@playwright/test');

test.describe('Windows handling concepts', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/windows');
        await expect(page).toHaveTitle('Window handling - LetCode');
    });
    test('Go to new tab', async ({ page, context }) => {
        console.log(await page.title());
        try {
            //Click on the home button 
            //Promise.all waits for both actions to finish and  returns an array of results, where:
            //The first item is the Page object of the new tab
            const [newTab] = await Promise.all([
                //It listens for the browser to open a new tab or a new window.
                //When the new tab or window opens, it returns a Playwright Page object.
                context.waitForEvent('page'),
                await page.click('#home')
            ])
            //Goto the newly opened tab - newTab (which is a Page object representing the new tab)
            await newTab.waitForLoadState();
            expect(newTab).toHaveTitle('LetCode - Testing Hub');
            expect(newTab).toHaveURL(/test/i);
            //Print the title of the page 
            console.log(await newTab.title());
            const loginButton = await newTab.getByRole('link', { name: 'Log in' });
            await loginButton.click();
            await newTab.waitForURL(/signin/i);
            //expect(newTab).toHaveURL(/signin/i);
            await page.bringToFront();
            await page.click('"Work-Space"');
            //Close the parent window
            await page.close();
            //Close the child window
            await newTab.close();
        } catch (error) {
            // Handle the error by printing it to the console
            console.error('Error occurred while opening or interacting with the new tab:', error);
        }
    });

    test('Open multiple windows', async ({ page, context }) => {
        const [multiPages] = await Promise.all([
            context.waitForEvent('page'),
            await page.click('#multi')
        ])
        await multiPages.waitForLoadState();
        //returns the number of open pages within the context
        const allPages = multiPages.context().pages();
        console.log('No of pages: ' + allPages.length);
        allPages.forEach(page=> {
            console.log(page.url());
        });
        await allPages[1].bringToFront();
        await allPages[1].on('dialog', dialog => dialog.accept());
        const simpleAlertButton = await allPages[1].locator('#accept').click();
    });
});