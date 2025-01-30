const { test, expect } = require('@playwright/test');

test.describe('Drag tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in');
        await expect(page).toHaveTitle('LetCode with Koushik');
    });

    test('Drag box within boundary', async ({ page }) => {
        await page.goto('https://letcode.in/draggable');
        await expect(page).toHaveTitle('Draggable - LetCode');
        // Locate the draggable box by targeting the div with id="sample-box"
        const draggableBox = page.locator('#sample-box');

        // Locate the boundary element (for example: .example-boundary)
        const boundary = page.locator('.example-boundary');

        // Get the bounding box of the draggable box and the boundary
        const draggableBoxBoundingBox = await draggableBox.boundingBox();
        
        if (draggableBoxBoundingBox) {
            const { x, y, width, height } = draggableBoxBoundingBox;
            // Target coordinates
            const targetX = 500;
            const targetY = 500;

            // Log initial position for debugging
            console.log(`Initial Position: x=${x}, y=${y}, width=${width}, height=${height}`);

            // Move the mouse to the center of the draggable box
            await page.mouse.move(x + width / 2, y + height / 2);
            await page.mouse.down();
            await page.mouse.move(targetX + 50, targetY + 50, { steps: 5 });  // Drag to a new position
            await page.mouse.up();

            // Simulate releasing the mouse button (drag end)
            await page.mouse.up();

            // Check the final position of the draggable box after the drag
            const finalBoundingBox = await draggableBox.boundingBox();
            console.log(`Final Position: x=${finalBoundingBox.x}, y=${finalBoundingBox.y}`);

            // Optionally, take a screenshot for visual verification
            await page.screenshot({ path: 'drag-result.png' });

        } else {
            throw new Error('Draggable box or boundary not found!');
        }
    });
    test('Drop test', async ({page}) => {
        await page.goto('https://letcode.in/dropable');
        await expect(page).toHaveTitle('Droppable - LetCode');
        const droppableSquare = await page.locator('#draggable');
        const dropHereSquare = await page.locator('#droppable');
        
        if(droppableSquare && dropHereSquare){
            await droppableSquare.dragTo(dropHereSquare);
        }
    });
});