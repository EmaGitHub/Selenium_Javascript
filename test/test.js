 async function go(){
  
       const chrome = require("selenium-webdriver/chrome");
       const {By,Key,Builder} = require("selenium-webdriver");

       const screen = {
        width: 1100,
        height: 900
      };
        
       //To wait for browser to build and launch properly
       let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().windowSize(screen))  //.headless()
        .build();
       
       await driver.get("http://facebook.com")

        // cookie request
        element = driver.findElement(By.xpath("//button[@data-cookiebanner='accept_button']"));
        element.click();




        
        //It is always a safe practice to quit the browser after execution
        //await driver.quit();
 
}
 
go()