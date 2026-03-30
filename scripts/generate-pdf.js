const puppeteer = require("puppeteer");
const fs = require("fs");
(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();

  await page.goto(`file:///${process.cwd()}/out/index.html`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "./static/PhamCongCuong.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();
