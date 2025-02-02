// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 0,
  reporter: 'html',
  use: {
    headless: true,
  },
});