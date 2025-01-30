const { test, expect } = require('@playwright/test');

test.describe('Bookstore Tests', () => {
test.beforeEach('Go to website', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/bookstore');
    const title = await page.title();
    await expect(title).toBe('E-commerce Bookstore Example for Practicing Automated Tests');
});

test('Search Functionality', async ({ page }) => {
    // Navigate to the website and locate the search bar.

    const searchBar = await page.getByPlaceholder('Enter keywords...');
    const searchButton = await page.getByRole('button', { name: 'Search' });
    // Enter a book title (e.g., "Agile Testing") and trigger the search.
    await searchBar.fill("Agile Testing");
    await searchButton.click();
    // Verify that search results are displayed.
    await expect(page).toHaveURL(/search=agile/i);
    // Validate that at least one result contains the search term.
    await expect(page.locator('a').filter({ hasText: 'Agile Testing' })).toHaveText('Agile Testing');
});

test('Filtering Results', async ({ page }) => {
    // Locate the category dropdown or filter section.
    // Apply a filter (e.g., "Fiction" or "Science").
    const category = 'Testing';
    await page.getByRole('link', { name: category, exact: true }).click();
    // Verify that the results match the selected category.
    await page.waitForSelector('.card-product-user');
    const results = await page.locator('.card-product-user'); 

    const count = await results.count();
    await expect(count).toBeGreaterThan(0);
    
    for (let i = 0; i < count; i++) {
        const title = await results.nth(i).locator('h5.card-title').textContent(); // Locate title within each product card.
        expect(title).toMatch(/Testing/i); // Assert the title matches the expected pattern.
    }
    // Try combining multiple filters (if supported) and validate results.
});

test('Pagination', async ({page}) => {

    // Perform a search that yields multiple pages of results.
    // Find and interact with the pagination controls.
    // Navigate to the second or third page.
    // Verify that results change appropriately with page navigation.
});

});