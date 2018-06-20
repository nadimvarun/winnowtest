// An example configuration file.
exports.config = {

	//seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  /*capabilities: {
    'browserName': 'chrome',
      'chromeOptions': {
          'args': ['show-fps-counter=true']
      }

  },*/

  capabilities:{

      'browserName': 'firefox',
      /*'ChromeOptions': { 

        'args':['start-maximized']*/
        

     },


  /*onPrepare: function () {
	    return browser.takeScreenshot(); 
	},
  onPrepare: function() {
	    setTimeout(function() {
	        browser.driver.executeScript(function() {
	            return {
	                width: window.screen.availWidth,
	                height: window.screen.availHeight
	            };
	        }).then(function(result) {
	            browser.driver.manage().window().setSize(result.width, result.height);
	        });
	    });
	};*/

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',



  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./TestCases/*.js'],

  //getPageTimeout: 5000,
  //allScriptsTimeout: 5000,

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 40000,
    isVerbose: true,
    includeStackTrace: true

  }
};
