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
    let keyWillBeSendPromise = page.type('input[type="text"]',"facebook")
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
}).then(function(){
       // waiting for the element to appear on the page
  let elementWaitPromis = page.waitForSelector('input[type="text"]',{visible:true})
  return elementWaitPromis;
}).then(function(){
    // type any element on that page -> selector
    let keyWillBeSendPromise = page.type('input[type="text"]',"9540354422")
    // console.log("Reached google home pages ");
    return keyWillBeSendPromise;
}).then(function(){
    // waiting for the element to appear on the page
let elementWaitPromis = page.waitForSelector('input[type="password"]',{visible:true})
return elementWaitPromis;
}).then(function(){
 // type any element on that page -> selector
 let keyWillBeSendPromise = page.type('input[type="password"]',"Apna Password Daal
                                      ")
 // console.log("Reached google home pages ");
 return keyWillBeSendPromise;
}).then(function(){
    let elementWaitPromis = page.waitForSelector("button._42ft._4jy0",{visible:true})
    return elementWaitPromis;
 }).then(function(){
     // type any element on that page -> selector
     let keyWillBeSendPromise = page.click('button._42ft._4jy0')
     // console.log("Reached google home pages ");
     return keyWillBeSendPromise;
 })
 .then(function(){
    let elementWaitPromis = page.waitForSelector(".m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b span",{visible:true})
    return elementWaitPromis;
 }).then(function(){
     // type any element on that page -> selector
     let keyWillBeSendPromise = page.click('.m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b span')
     // console.log("Reached google home pages ");
     return keyWillBeSendPromise;
 })
 .then(function(){
    let elementWaitPromis = page.waitForSelector(".m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b span",{visible:true})
    return elementWaitPromis;
 }).then(function(){
     // type any element on that page -> selector
     let keyWillBeSendPromise = page.click('.m9osqain.a5q79mjw.gy2v8mqq.jm1wdb64.k4urcfbm.qv66sw1b span')
     // console.log("Reached google home pages ");
     return keyWillBeSendPromise;
 })
 .then(function(){
    // waiting for the element to appear on the page
  let elementWaitPromis = page.waitForSelector('._1p1t',{visible:true})
   return elementWaitPromis;
}).then(function(){
 // type any element on that page -> selector
  let keyWillBeSendPromise = page.type('._1p1t',"Wish you a many many happy returns of the dayMay God bless you with health, wealth and prosperity in your life. HAPPY BIRTHDAY @ishu ishu")
 // console.log("Reached google home pages ");
  return keyWillBeSendPromise;
})
.catch(function(err){
    console.log(err)
})
console.log("affter")
