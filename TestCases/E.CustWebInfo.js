describe('Customer Web info', function () {

    var originalTimeout;

    var glob = "global";

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

    it('All about your website', function () {


        var el1 = element(by.css('h3.ng-tns-c7-4'));
        browser.wait(EC.presenceOf(el1), 10000);
        expect(el1.isPresent()).toBeTruthy();
        el1.getText().then(function (text) {

            console.log(text);

        });
    });
       it('visits to your website', function() {


           var el2 = element(by.css('.form14_first_section > b:nth-child(1)'));
           expect(el2.getText()).toEqual("Visits To Your Website");
           el2.getText().then(function (text) {

              console.log(text+" "+"text is present");
           });

           var el2a = element(by.css('.form14_first_section > b:nth-child(5)'));
           /*expect(el2.getText()).toEqual("Visits To Your Website");*/
           el2a.getText().then(function (text) {


               console.log(text);
           });

           var el2b = element(by.css('.first_section_month > span'));
           el2b.getText().then(function (text) {

               console.log(text);
           });

       });

       it('Devices',function () {

           var el2c = element(by.css('.form14_second_section > b:nth-child(1)'));
           expect(el2c.getText()).toContain('Devices');
           el2c.getText().then(function (text) {

               console.log(text);

           });
           
           var cwb = element(by.linkText('Next'));
           cwb.click();
        });

       /* it ('similarweb',function(){


            similarweb();
            
            
        });*/
        
       /* it ('Next', function(){
        	
        	  var firstwin = handles[0];
              browser.switchTo().window(firstwin).then(function () {
              console.log("Returning back");
              var cwb = element(by.linkText('Next'));
              cwb.click();

              });

        	
        });*/

        /* function similarweb(){

           browser.executeScript('window.open()').then(function(){
               browser.getAllWindowHandles().then(function(handles){
                  
                  var secwindow = handles[1];
                  browser.ignoreSynchronization = true;
                  browser.switchTo().window(secwindow).then(function(){

                      
                    browser.get("https://www.similarweb.com");

                      var login = element(by.linkText('Login'));
                      browser.wait(EC.presenceOf(login), 10000);
   
                      login.click();
   
                      var signin = element(by.buttonText('Connect with Google'));
   
                      signin.click();

                      browser.sleep(1000);
   
                        

                        var uname = element(by.id('identifierId'));
                        uname.sendKeys("varun@icelero.com");

                        element(by.css('.RveJvd')).click();

                        browser.sleep(1000);

                        var pwd = element(by.xpath("//div[2]/form/div[2]/div/div[3]/div[1]/div[1]/div/div/div[1]/div/div[1]/input"));
                        pwd.sendKeys("VAUN@6891");

                        element(by.css('.RveJvd')).click();

                        var but = element(by.xpath("/html/body/div[1]/div/div/div/div/div/div/sw-react/div/div/div[2]/button"));
                         browser.wait(EC.presenceOf(but), 25000);
                        browser.getCurrentUrl().then(function(url){

                            console.log(url);

                        });
                         but.click();
                       
                         browser.sleep(1000);
                     
                         
                    var srch = element(by.css('.universalInput-input'));
                    browser.wait(EC.presenceOf(srch), 35000);
                         srch.click();
                         
                         srch.sendKeys("lays");

                         //browser.sleep(1000);

                         var elweb = element(by.xpath("//*[@id='section_header_website']//li//div[contains(text(),'lays.pl')]"));
                         browser.wait(EC.presenceOf(elweb),5000);
                         elweb.click();

                         browser.sleep(1000);

                         var ltext = element(by.xpath("/html/body/div[1]/div/div/div/sub-nav/div/div[2]/div[1]/sw-react/div/div[1]/ul/li/a"));
                         browser.wait(EC.presenceOf(ltext),25000);
                         ltext.getText().then(function(text){

                             console.log(text);
                             expect(text).toContain("lays.pl");

                         });

                          browser.sleep(1000);
                     

                    });
                
                
                
                });
            });
        };*/
    });
