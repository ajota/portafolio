const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:5501",
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
