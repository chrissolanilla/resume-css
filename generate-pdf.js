import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({ product: "firefox" });
  const page = await browser.newPage();

  // Use the custom __dirname
  await page.goto("file://" + __dirname + "/index.html", {
    waitUntil: "networkidle2",
  });

  await page.pdf({ path: "resume.pdf", format: "A4" });
  await browser.close();
})();
