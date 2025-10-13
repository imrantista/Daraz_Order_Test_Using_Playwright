// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Test Config
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* Reporter configuration: console, Allure, HTML */
  reporter: [
    ['list'], 
    ['allure-playwright'], 
    ['html', { open: 'never' }],
  ],

  /* Shared settings for all tests */
  use: {
    trace: 'on-first-retry', // Collect trace when a test fails
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment if you want to test on Firefox or WebKit
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
