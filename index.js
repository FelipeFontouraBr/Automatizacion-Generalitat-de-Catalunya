const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://web.gencat.cat/ca/inici');
    
    await page.fill('input#cercadorOcultGoogle', 'agenda cultural');
    
    await page.click('.fpca_cercadorGencat .cercador_vermell .btn');

    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    await timeout(10000)
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
})();
