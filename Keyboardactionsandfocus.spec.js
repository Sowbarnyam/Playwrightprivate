const { test, expect } = require('@playwright/test');

test('Keyboard actions and focus', async ({ page }) => {

    // Navigate to a login page
    await page.goto('https://github.com/login');

    // Focus on username field and type
    await page.locator('input[name="login"]').focus();
    await page.keyboard.type('sowbarnya');

    // Press Tab to switch to the password field
    await page.keyboard.press('Tab');

    // Type password
    await page.keyboard.type('SowbarnyaPassword123', { delay: 100 });

    // Press Enter to submit the form
    await page.keyboard.press('Enter');

    console.log('Login attempted!');

});
