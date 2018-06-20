
describe('Customer social info', function () {

    browser.waitForAngularEnabled(false);

    var EC = protractor.ExpectedConditions;
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });
    afterEach(function () {
        browser.sleep(3000);

    });
    beforeEach(function () {
        browser.sleep(3000);

    });


    it('form 2 page', function () {



        /*var website = element(by.css('p-autocomplete[name="WebsiteLink"]'));*/
        var website = element(by.xpath("*//p-autocomplete/span/input"));
        website.sendKeys("lays");

        browser.sleep(3000);

        var sel = element(by.xpath("*//p-autocomplete/span/div/ul//div[contains(text(),'https://www.facebook.com/lays/')]"));
        sel.click();

        browser.sleep(2000);

        var fb = element(by.xpath("*//div/form/div/div[2]/p-autocomplete/span/input"));
        fb.sendKeys("lays");

        browser.sleep(3000);

        var selfb = element(by.xpath("*//div/div[2]/p-autocomplete/span/div/ul//div[contains(text(),'lays.pl')]"));
        browser.sleep(1000);
        selfb.click();

        browser.sleep(2000);
        

        var buton = element(by.linkText('Next'));
        buton.click();
    });
});