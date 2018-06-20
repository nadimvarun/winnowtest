describe('Customer fb info', function () {

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

    it('Cust FB Info', function () {


       var fbel = element(by.css('h3.ng-tns-c6-3'));
        browser.wait(EC.presenceOf(fbel), 25000);
        fbel.getText().then(function(text){

            console.log(text);
        });
       //expect(fbel1.getText()).toEqual("Analysis Of Your Facebook Page")
       
       /*var rate = element(by.css('p.ng-tns-c6-5'));
       rate.getText().then(function(text){

        console.log(text);

       });*/

          

        var fbutton = element(by.linkText('Next'));
        fbutton.click();


    });

    });