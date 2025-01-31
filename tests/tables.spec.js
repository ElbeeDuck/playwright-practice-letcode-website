const { test, expect } = require('@playwright/test');

test.describe('Table tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/table');
        await expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Add all the prices and check if the total is correct', async ({ page }) => {
        let totalPrice = 0;
        const rowCount = await page.locator('#shopping tbody').locator('tr').count();
        let tableTotal = await page.locator('#shopping tfoot').locator('td').nth(1).textContent();
        //Turn text content from table into a number
        tableTotal = parseFloat(tableTotal);

        for (let i = 0; i < rowCount; i++) {
            //find all the prices in the second row of the table body
            const priceText = await page.locator('#shopping tbody').locator('tr').nth(i).locator('td').nth(1).innerText();
            //convert to number
            const price = parseFloat(priceText);
            //find the total by adding them
            totalPrice += price;
        }

        expect(totalPrice).toEqual(tableTotal);
    });

    test('Mark Raj as present', async ({ page }) => {
        const checkbox = page.locator('#simpletable tbody').locator('tr').nth(1).locator('td').nth(3).locator('input[type="checkbox"]');
        await expect(checkbox).toBeVisible();
        await expect(checkbox).toBeEnabled();
        await checkbox.check();
    });

    test('Check if the sorting is working properly', async ({ page }) => {
        const rowLocator = await page.locator('table[matsort]').locator('tr').nth(0).locator('td').nth(0)
        const dessertSortArrow = page.getByRole('button', { name: 'Dessert (100g)' });
        const sortedRowLocator = await page.locator('table[matsort]').locator('tr').nth(0).locator('td').nth(0);
        await expect(rowLocator).toBeVisible();

        let firstRowText = await rowLocator.textContent();
        expect(firstRowText).toEqual('Frozen yogurt');
        await dessertSortArrow.click();
        firstRowText = await sortedRowLocator.textContent();
        expect(firstRowText).toEqual('Cupcake');
        });
});