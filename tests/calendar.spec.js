const { test, expect } = require('@playwright/test');
import moment from 'moment';

test.describe('Calendar tests', () => {

    test.beforeEach('Go to url', async ({ page }) => {
        await page.goto('https://letcode.in/calendar');
        //expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Select tomorrows date', async ({ page }) => {
        // Open the calendar widget
        await page.locator('.is-datetimepicker-range').click();

        // Calculate the target date
        const targetDate = moment().add(-1, 'days');

        //const targetDay = targetDate.format('D'); // Day of the month without leading zero
        const targetMonthYear = targetDate.format('MMMM YYYY'); // Full month and year

        // Navigate to the target month and year
        const displayedMonthYear = await page.locator('.datepicker-nav').nth(1).textContent();
        const normalizedDisplayedMonthYear = displayedMonthYear.replace(/\s+/g, ' ').trim();
        expect(normalizedDisplayedMonthYear).toMatch(targetMonthYear);
        console.log(`Displayed Month-Year: "${normalizedDisplayedMonthYear}"`);
        console.log(`Target Month-Year: "${targetMonthYear}"`);

    });

    test('Select next weeks date', async ({ page }) => {
 
    });

    test('Select next months date', async ({ page }) => {

    });

    test('Select previous 20 days and next 10 days', async ({ page }) => {

    });
});