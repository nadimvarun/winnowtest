describe('winnow pages test', function () {

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

        })

        it('should launch home page', function () {
            browser.get('http://test.winnow.co');
            var ltext = element(by.linkText('Analyze My Business For Free'));
            //expect(ltext.getTagName()).toBe('a');
            ltext.click();

        });
    });

