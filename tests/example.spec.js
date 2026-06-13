const { test, devices } = require("@playwright/test");
const fs = require("fs");

if (!fs.existsSync("screenshots")) fs.mkdirSync("screenshots");

async function capturar(browser, config, archivo) {
  const page = await browser.newPage(config);
  await page.goto("/");
  // Espera a que el loader desaparezca
  await page.waitForSelector("#loader", { state: "hidden", timeout: 10000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `screenshots/${archivo}.png`, fullPage: true });
  await page.close();
}

test("iPhone 14", async ({ browser }) => {
  await capturar(browser, { ...devices["iPhone 14"] }, "iphone-14");
});
test("iPhone SE", async ({ browser }) => {
  await capturar(browser, { ...devices["iPhone SE"] }, "iphone-se");
});
test("Samsung Galaxy", async ({ browser }) => {
  await capturar(browser, { ...devices["Galaxy S9+"] }, "samsung-galaxy");
});
test("Pixel 7", async ({ browser }) => {
  await capturar(browser, { ...devices["Pixel 7"] }, "pixel-7");
});
test("iPad Mini", async ({ browser }) => {
  await capturar(browser, { ...devices["iPad Mini"] }, "ipad-mini");
});
test("iPad Pro", async ({ browser }) => {
  await capturar(browser, { ...devices["iPad Pro 11"] }, "ipad-pro");
});
test("Laptop 1280px", async ({ browser }) => {
  await capturar(
    browser,
    { viewport: { width: 1280, height: 800 } },
    "laptop-1280",
  );
});
test("Laptop 1440px", async ({ browser }) => {
  await capturar(
    browser,
    { viewport: { width: 1440, height: 900 } },
    "laptop-1440",
  );
});
test("PC 1920px", async ({ browser }) => {
  await capturar(
    browser,
    { viewport: { width: 1920, height: 1080 } },
    "pc-1920",
  );
});
test("PC 4K", async ({ browser }) => {
  await capturar(browser, { viewport: { width: 2560, height: 1440 } }, "pc-4k");
});
