import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {
    
    before(async () => {
        console.log('THIS COULD BE USED FOR THE TEST SETUP');
        
    })
    
    beforeEach(async () => {
        console.log('THIS RUNS BEFORE EACH TEST');
        
        // Open URL
        await HomePage.open();
    })

    after(async () => {
        console.log('THIS COULD BE USED FOR THE TEST CLEAN UP');
        
    })
    
    afterEach(async () => {
        console.log('THIS RUNS AFTER EACH TEST');
        
        
    })
    
    it('Open URL & assert title', async () => {
        allureReporter.addSeverity('minor');

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    });
});

    it('Open About Page & assert title', async () => {
        // Open about page
        await browser.url('https://practice.automationbro.com/about');

        // Assert URL
        await expect(browser).toHaveUrl('https://practice.automationbro.com/about/')
    });



    it('Click get started & assert url contains get-started text', async () => {
        // Open about page
        await HomePage.open();

        // Click get started button
        await HomePage.btnGetStarted.click();

        // Assert url contains get-started text
        await expect(browser).toHaveUrlContaining('get-started')
    });

    it('Click logo & assert url DOES NOT contain get-started text', async () => {
        allureReporter.addFeature('Logo Verification');

        // Open about page
        await HomePage.open();

        // Click get started button
        
        await HomePage.imageLogo.click();

        // Assert url contains get-started text
        await expect(browser).not.toHaveUrlContaining('get-started')
    });

    it('Find heading element & assert the text', async () => {
        // Open about page
        await HomePage.open();

        // find heading element
        const headingEl = await HomePage.txtHeading;

        // get the text
        const headingText = await headingEl.getText(); 

        // Assert the test
        await expect(headingText).toEqual('Think different. Make different.')
        //await expect(headingEl).toHaveText('Think different. Make different.')
    });

    