const puppeteer = require('puppeteer');

describe('Navigating to a page that is a valid GET route', () => {

  it.skip('returns a 200 on route that does exist', async() => {
    let response;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    response = await page.goto('http://localhost:8888/');
    expect(response.status()).toBe(200)
    await browser.close();
  });
});