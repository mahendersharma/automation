const puppeteer = require('puppeteer');
let page;

// open browser lauchn
const browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport:null,
    args:["--start-maximized"]
});
 browserOpenPromise.then(function(browser){
    // currently opened tabs 
  const pagesArrpromise =  browser.pages();
  return pagesArrpromise;

}).then(function(browserpages){
   page = browserpages[0];
   let gotoPromise =   page.goto("https://www.google.com/");
   return gotoPromise;
}).then(function(){
    // waiting for the element to appear on the page
  let elementWaitPromis = page.waitForSelector('input[type="text"]',{visible:true})
  return elementWaitPromis;
})
.then(function(){
    // type any element on that page -> selector
    let keyWillBeSendPromise = page.type('input[type="text"]',"oyo")
    // console.log("Reached google home pages ");
    return keyWillBeSendPromise;
}).then(function(){
    // page.keyboard to type special characters
   let EnterWillBePresses = page.keyboard.press("Enter");
   return EnterWillBePresses;
}).then(function(){
   let elementWaitPromis = page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true})
   return elementWaitPromis;
}).then(function(){
    // type any element on that page -> selector
    let keyWillBeSendPromise = page.click('h3.LC20lb.DKV0Md')
    // console.log("Reached google home pages ");
    return keyWillBeSendPromise;
})
.catch(function(err){
    console.log(err)
})
console.log("affter")