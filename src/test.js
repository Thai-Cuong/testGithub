(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('target url', {waitUntil: 'networkidle2'});
  
    // Then you have to find element on page, which you'd like to click.
    // It could be done with your browser. The image would be later.
    // Or use JS selectors. We assume the easiest case to show the logic.
    // You selected the element and get path via browser.
  
    // await page.click(<selector>);
  
    // </selector>await browser.close();
  })();