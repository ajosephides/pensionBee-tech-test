const puppeteer = require('puppeteer');

describe('Navigating to a page that is not a valid GET route', () => {
  
  it('returns a 404 on route that does not exist', async() => {
    let response;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    response = await page.goto('http://localhost:8888/');
    expect(response.status()).toBe(404)
    await browser.close();
  });
});