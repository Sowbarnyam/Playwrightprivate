// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
reporter: [
  ['list'], // Shows test execution in the console
  ['html', { outputFolder: 'playwright-report' }], // Generates an HTML report
  ['json', { outputFile: 'report.json' }], // Outputs results in JSON format
  ['junit', { outputFile: 'results.xml' }], // Generates JUnit XML report
  ['allure-playwright',{outputFolder: 'my-allure-results'}]
]
  timeout: 60000 // Default timeout for each test
  expect: {
    timeout: 10000 // Default timeout for expect assertions
  };
  use: {
    actionTimeout: 15000 // Default timeout for actions
  };
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },


  /* Configure projects for major browsers */
   

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], // Realistic Chrome device settings
     /*   headless: true,
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)', // Real Safari UA
        viewport: { width: 1280, height: 720 },
        locale: 'en-US',
        permissions: ['geolocation', 'notifications'], */
      },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],   // Mimics real Safari
        headless: true,                 // Run in headless mode
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)', // Real Safari UA
        viewport: { width: 1280, height: 720 }, // Standard desktop size
        locale: 'en-US',
        permissions: ['geolocation', 'notifications'],
      },
    },
  
   // Test against mobile viewports. 

    {
       name: 'Mobile Chrome',
       use: { ...devices['Pixel 5'] },
     },
     {
       name: 'Mobile Safari',
       use: { ...devices['iPhone 12'] },
     },
    ]
    // Test against branded browsers. 
     /*{
       name: 'Microsoft Edge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' },
     },
     {
       name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
}
);

