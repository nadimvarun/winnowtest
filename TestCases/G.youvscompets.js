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

    it('you vs competeitors ',function () {


        var header2 = element(by.css('h3.ng-tns-c10-7'));
        browser.wait(EC.presenceOf(header2), 10000);
        expect(header2.getText()).toBe("You Against Your Competitors");

       var rowone = element.all(by.xpath("//form/div[2]/div[2]/div/table/thead/tr"));
       rowone.each(function(row){
           var rowelem = row.$$('th');
           rowelem.each(function(col){

            col.getAttribute('innerText').then(function(text){

                if((text=="Websites") || (text=="Visits Per Month") || (text=="Avg. Time on Website") || (text=="Pages/ Visit") || (text=="Bounce Rate")){
            
                console.log(text+" "+"is present");

                }

            });

                
            });
           });


       
       

      
  browser.sleep(2000);

  var yvcb = element(by.linkText('Next'));
        yvcb.click();

        });
       /* element.all(by.css('thead.ng-tns-c10-7 > tr:nth-child(1)')).then(function(items){

            for (i=0;i<items.length;i++){

                console.log(items[i]);
   
               items[i].getText().then(function(text){
   
                   if((text==="Websites") || (text==="Visits Per Month") || (text==="Avg. Time on Website") || (text==="Pages/ Visit") || (text==="Bounce Rate")){
   
   
                       console.log(text+"is present");
                   }
                       else{

                        console.log("text is not present");


                       }
                   
   
   
               });
            }
   
           });*/

        



    });

    