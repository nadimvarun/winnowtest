describe('you vs competeitors', function () {

    browser.waitForAngularEnabled(false);

    var EC = protractor.ExpectedConditions;
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });
    afterEach(function () {
        browser.sleep(3000);

    });
    beforeEach(function () {
        browser.sleep(2000);

    });

    it('you vs competeitors fb ', function () {


        var htext = element(by.css('h3.ng-tns-c11-8'));
        browser.wait(EC.presenceOf(htext), 10000);
        expect(htext.getText()).toBe("You vs Your Competitors on Facebook");
        


        var yvcfbb = element(by.linkText('Next'));
        yvcfbb.click();
        
        


    });
});