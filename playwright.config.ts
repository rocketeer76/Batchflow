import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/e2e",
  use: { baseURL: "http://127.0.0.1:53102", trace: "on-first-retry" },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 53102",
    url: "http://127.0.0.1:53102",
    reuseExistingServer: false,
    env: { ASTRO_DEV_BACKGROUND: "0", CI: "true" },
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
