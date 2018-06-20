describe('Customer Competeitor info', function () {

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


    it('Competeitors info', function () {



        console.log("competeitors info");

        var head = element(by.xpath("//div/section/span/div/div[1]/h3"));
        browser.wait(EC.presenceOf(head), 10000);
        element(by.xpath("//div/section/span/div/div[1]/h3")).getText().then(function(text){
             console.log(text);

        });

        //expect(header.getText()).toBe("Let/'s see how you are doing against your competitors. Tell me who your competitors are. You can give me up to three!");



        browser.getCurrentUrl().then(function (url) {

            /* expect(url.toBe('https://testonboarding.winnow.co/#/form4'));*/

            console.log(url);

            element(by.xpath("*//p-autocomplete/span/input")).sendKeys("bingosnacks");
            browser.sleep(2000);
            var cwebs =  element(by.xpath("*//p-autocomplete/span/div/ul/li//div[contains(text(), 'bingosnacks.com')]"));
            cwebs.click();

            element(by.xpath("*//div/div[3]/p-autocomplete/span/input")).sendKeys("bingosnacks");
            browser.sleep(2000);
            var cfb = element(by.xpath("*//div/div[3]/p-autocomplete/span/div/ul/li[1]//div[contains(text(), 'BingoSnacks')]"));
            browser.sleep(1000);
            cfb.click();

            var cib = element(by.linkText('Next'));
            cib.click();





            /*element.all(by.css('.ui-autocomplete-items')).each(function (elem) {

                elem.getText().then(function (text) {by

                    if(elem.getText().toMatch('bingo')){

                       var d = elem.getCssValue('div');
                       console.log(d);


                    }

                            console.log(text);





                    });


                });*/


            });




        });

    });





            /*element(by.name(''))*/





