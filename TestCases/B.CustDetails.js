describe('Customer Details', function() {
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


    it('should launch form1 page', function () {
        element(by.name('first_name')).sendKeys("varun");
        element(by.name('last_name')).sendKeys("nadim");
        element(by.name('brand_name')).sendKeys("varuns");
        element(by.name('email_address')).sendKeys("varuntest101@yopmail.com");
        var letsdo = element(by.linkText('Let\'s do this'));
        letsdo.click();

    });
});

