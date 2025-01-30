const {test, expect} = require('@playwright/test');

test.describe('Button tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://letcode.in/buttons');
        expect(page).toHaveTitle('Interact with Button fields');
    });
    //select a button and come back using goBack
    //get the x and y coords of a button
    //find the colour of a button
    //find the height and width of a button
    //confirm a button is disabled
    //click and hold a button
    test('Buttons interactions', async ({page}) => {
        //Goto Home and come back here using driver command
        await page.getByRole('button', {name: 'Goto Home'}).click();
        await expect(page).toHaveTitle('LetCode with Koushik');
        await page.goBack();
        await expect(page).toHaveTitle('Interact with Button fields');
        //Get the X & Y co-ordinates
        const box = await page.getByRole('button', {name: 'Find Location'}).boundingBox();
        console.log(box);
        expect(box).not.toBeNull();

        //Find the color of the button
        const locator = await page.getByLabel('Find the color of the button');
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        const color = await locator.evaluate((element) => getComputedStyle(element).color);
        const backgroundColor = await locator.evaluate((element) => getComputedStyle(element).backgroundColor);
    
        // Log the color values
        console.log(`Button color: ${color}`);
        console.log(`Button background color: ${backgroundColor}`);
        //Find the height & width of the button
        const size = await page.getByRole('button', {name: 'How tall & fat I am?'}).boundingBox();
        console.log(`Width = ${size.width}, Height = ${size.height}`);
        expect(size).not.toBeNull();
        expect(size?.width).toBeGreaterThan(0);
        expect(size?.height).toBeGreaterThan(0); 

        //Confirm button is disabled
        await page.getByRole('button', {name: 'Disabled'}).isDisabled();

        //Click and Hold Button
        await page.getByRole('button', {name: 'Button Hold!'}).click({
            delay: 30,
        });
        
    });
});