const { test, expect } = require('@playwright/test');
const path = require('path');

test('Upload image file in Fora Advisor Portal', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Go to login page
    await page.goto('https://advisor.forastaging.net/');
    await expect(page).toHaveTitle(/Advisor/);

    // Login
    await page.click('text=Sign in here');
    await page.fill('#username', 'reenaz+user5710@team899982.testinator.com');
    await page.fill('#password', 'Qaoncloud@01');
    await page.click("//button[normalize-space()='Sign in']");

    // Wait for navigation and title validation
    await page.waitForNavigation();
    await expect(page).toHaveTitle('Login - Fora Advisor Portal');

    // Navigate to booking flow
    await page.locator("//span[normalize-space()='Book']").click();
    await page.locator("//button[@type='submit']").click();
    await page.mouse.wheel(0, 5000);

    // Click on hotel
    await page.locator("//span[normalize-space()='The Roxy Hotel New York']").click();

    // Click 'Write a review'
    await page.locator("//button[normalize-space()='Write a review']").click();

    // Wait for 'Add Files' button and click
    const addFilesBtn = page.locator("//button[normalize-space()='Add Files']");
    await addFilesBtn.waitFor({ state: 'visible' });
    await expect(addFilesBtn).toBeEnabled();
    await addFilesBtn.click();
    await page.pause();

    // Wait for 'browse files' button and click
    const browseBtn = page.locator("//button[normalize-space()='browse files']");
    await browseBtn.waitFor({ state: 'visible' });
    await expect(browseBtn).toBeEnabled();
    await browseBtn.click();
    await page.pause();


    // Wait for the file input to appear
     // ✅ Upload image using input[type="file"]
     const imagePath = path.resolve('C:\\Users\\DCKLP-101\\Pictures\\Screenshots\\Client screen.png');
     await page.setInputFiles('input[type="file"]', imagePath);

    // Click 'Upload 1 file' button
    const uploadBtn = page.locator("//button[normalize-space()='Upload 1 file']");
    await uploadBtn.waitFor({ state: 'visible' });
    await expect(uploadBtn).toBeEnabled();
    await uploadBtn.click();
    await page.pause();

});
