const { test, expect } = require('@playwright/test');

test('Scrolling in Playwright', async ({ page }) => {
   
    await page.goto('https://www.nytimes.com');

    // 1️⃣ Scroll Down the Page (1000px)
    console.log('Scrolling down...');
    await page.evaluate(() => window.scrollBy(0, 5000));

    // 2️⃣ Scroll Back Up
    console.log('Scrolling up...');
    await page.evaluate(() => window.scrollBy(0, -5000));

    // 3️⃣ Scroll to the Bottom of the Page
    console.log('Scrolling to the bottom...');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2000);

    // 4️⃣ Scroll to a Specific Section (Example: Footer)
    console.log('Scrolling to the footer...');
    await page.locator('footer').scrollIntoViewIfNeeded();

    
    // 5️⃣ Scroll Using Mouse Wheel
    console.log('Scrolling using mouse wheel...');
    await page.mouse.wheel(0, 500); // Scroll down
    await page.waitForTimeout(1000);
    await page.mouse.wheel(0, -500); // Scroll up

    // 6️⃣ Scroll Inside a Scrollable Section (Example: Sidebar)
    console.log('Scrolling inside a specific div...');
    await page.evaluate(() => {
        let div = document.querySelector('.css-1ez5fsm'); // Example: Scroll inside a scrollable section
        if (div) div.scrollBy(0, 300);
    });

    console.log('All scrolling actions completed!');
});
