const puppeteer = require('puppeteer');

describe('Goes to job page and gets right content', () => {
  it.skip('finds a snippet of text that is expected', async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:8888/jobs');
  
    const content = await page.evaluate(() => window.find("Acme Co. is often seeking candidates in the areas of marketing"));
    expect(content).toBe(true);
    await browser.close();
  });
});