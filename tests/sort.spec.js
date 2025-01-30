import { test, expect } from '@playwright/test';

test.describe('Swapping tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/sortable');
        await expect(page).toHaveTitle('Sortable - LetCode');
    });

    test('Move content from todo to done', async ({ page }) => {
        const doneList = await page.getByText('Done').first();
        const tasks = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];



        async function moveToDone(page, taskText, doneList) {
            const task = await page.getByText(taskText);
            const toDoItemBox = await task.boundingBox();
            const doneListBox = await doneList.boundingBox();

            if (!toDoItemBox || !doneListBox) {
                console.warn(`Skipping: ${taskText} (Element not found)`);
                return;
            }

            await page.mouse.move(toDoItemBox.x + toDoItemBox.width / 2, toDoItemBox.y + toDoItemBox.height / 2);
            await page.mouse.down();
            await page.mouse.move(doneListBox.x + doneListBox.width / 2, doneListBox.y + 50, { steps: 20 });
            await page.mouse.up();

            // Take a screenshot for visual verification
            await page.screenshot({ path: 'sort-result.png' });

        };

        for (const task of tasks) {
            await moveToDone(page, task, doneList);
        }
    });
});