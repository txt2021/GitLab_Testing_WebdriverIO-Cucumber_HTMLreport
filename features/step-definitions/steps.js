const { Given, When, Then } = require('@wdio/cucumber-framework');

const mainpage = require('../pageobjects/main.page');
const searchpage = require('../pageobjects/search.page');
const signuppage = require('../pageobjects/signup.page');
const supportpage = require('../pageobjects/support.page');
const trialpage = require('../pageobjects/trial_expert.page');


Given("A user open main GitLab page",  function ()  {
    mainpage.open();
});

When('A user clicks on {string} button', async (button) => {
    switch(button){
      case 'Support':
        await mainpage.clickLoginButton();
        break;   
      case 'Talk to an expert':
        await mainpage.clickexpertsButton();
        break;
      case 'Get free trial':
        await mainpage.clicktrialButton();
        break;
      case 'DevOps':
          await searchpage.clickdevopsButton()      
        break;
      default:
        console.log('Can not find button');
    }
    
});

When('A user clicks on search icon', async () =>  {
    await mainpage.clicksearchButton();
});
  
When('A user press Enter', async () =>  {
    await browser.keys("\uE007");
});

When('A user clicks on {string}', async (button) => {
    switch(button){
      case 'Register1':
        await mainpage.clicksignupButton();
        break;   
        
      case 'Register2':
        await signuppage.clicksubmitButton();
        break;  
        
      case 'Saleforce':
        await signuppage.clicksaleforceButton();
        break;

      case 'Why GitLab':
        await mainpage.clickwhygitlabButton();
        break;
        
      case 'Platform':
        await mainpage.clickplatformButton();
        break;
      
      case 'Solutions':
        await mainpage.clicksolutionsButton();
        break;      
      
      case 'Partners':
        await mainpage.clickpartnersButton();
        break;

      case 'Resources':
        await mainpage.clickresourcesButton();
        break;
      
      case 'Pricing':
        await mainpage.clickpricingButton();
        break;

      case 'gitlab.com':
        await searchpage.clickGitlabButton();
        break;

      case 'Contact Support':
        await supportpage.clickcontsctButton();
        break;

      case 'Get Help':
        await supportpage.clickgethelpButton();
        break;

      case 'Set up support services':
        await supportpage.clickservicesButton();
        break;

      case 'Contact Sales':
        await supportpage.clicksalesButton();
        break;

      default:
        console.log('Can not find button');
        break;
    } 
    
});

When('A user enters {string} in {string} field', async (data,field) => {
    switch(true){
      case data == 'Tester' && field == 'First name':
          await signuppage.enterFirstname();
        break;
     
      case data == 'Smith' && field =='Last name':
          await signuppage.enterLastname();
        break;
  
      case data == 'tester_8976' && field =='Username':
          await signuppage.enterUsername();
        break;
  
      case data == 'fahafo5464@civikli.com'  && field =='Email':
          await signuppage.enterEmail();
        break;
  
      case data == 'fahafo5464'  && field =='Email':
          await signuppage.enterwrongEmail();
        break;
  
      case data == 'testingpass' && field == 'Password':
          await signuppage.enterPassword();
        break;
      
      case data == 'testing' && field == 'search':
          await searchpage.enterSearchItem();
        break;
  
      default:
          console.log('Can not find input field');
    }  
});

Then('{string} message was displayed. User was redirected to {string} page', async (message,url) => {
    switch(message){
      case 'There was an error with the reCAPTCHA. Please solve the reCAPTCHA again.':
          await signuppage.ismessageVisible();
          await signuppage.ismessageCorrect();
          await signuppage.urlUserChecking();
        break;
      default:
          console.log('Can not find message');
    }
    
});

Then('{string} message was displayed under the Email field. User stays on the same page', async (message) => {
    switch(message){
      case 'Please provide a valid email address.':
          await signuppage.isemailmessageCorrect();
          await signuppage.urlSignupChecking();
          await signuppage.urlSignupChecking();
        break;
      case 'This field is required.':
          await signuppage.isemptynameVisible();
          await signuppage.isemptynameCorrect();
          await signuppage.isemptysurnameVisible();
          await signuppage.isemptysurnameCorrect();
          await signuppage.urlSignupChecking();
        break;
      default:
          console.log('Can not find message');
    }
    
});

Then('Saleforce login form was was displayed. User was redirected to the {string} page', async (url) => {
    await signuppage.urlSaleforceChecking();
    
});

Then('{string} title was displayed, {string} section was appeared', async (title,section) => {
    switch(title){
      case 'Why GitLab':
          await mainpage.iswhyformVisible();
          await mainpage.iswhyformCorrect();
          await mainpage.urlAboutChecking();
        break;
  
      case 'Platform':
          await mainpage.isplatformformVisible();
          await mainpage.isplatformformCorrect();
          await mainpage.urlAboutChecking();
        break;
  
      case 'Solutions':
        await mainpage.issolutionsformVisible();
        await mainpage.issolutionsformCorrect();
        await mainpage.urlAboutChecking();
        break;
      
      case 'Partners':
          await mainpage.ispartnerformVisible();
          await mainpage.ispartnersformCorrect();
          await mainpage.urlAboutChecking();
          break;
  
      case 'Resources':
          await mainpage.isresourcesformVisible();
          await mainpage.isresourcesformCorrect();
          await mainpage.urlAboutChecking();
          break;
  
      default:
          console.log('Can not find section');
    }
    
});

Then('{string} title was displayed. User was redirected to the {string} page', async (title,url) => {
    switch(title){ 
      case 'Get The One DevOps Platform':
          await mainpage.ispricingtitleVisible();
          //await mainpage.ispricingtitleCorrect();
          await mainpage.urlPricingChecking();
        break;
  
      case 'Talk to an Expert':
          await trialpage.istitleVisible();
          await trialpage.istitleCorrect();
          await trialpage.isexpertsformVisible();
          await trialpage.urlSalesChecking();
        break; 
  
      case 'Free trial':
          await trialpage.istrialVisible();
          await trialpage.istrialCorrect();
          await trialpage.istrialformVisible();
          await trialpage.urlTrialChecking();
        break; 
      
      case 'What is DevOps?':  
          await searchpage.urlAboutChecking();     
          break;
  
      case 'GitLab Support':
          await supportpage.isresultVisible();
          await supportpage.iscontactCorrect();
          await supportpage.urlSupportChecking();     
          break;
  
      case 'Help Topics':
            await supportpage.isresultVisible();
            await supportpage.isgethelpCorrect();
            await supportpage.urlGethelpChecking();
            break;
  
      case 'GitLab Professional Services':
            //await supportpage.isservicesVisible();
            //await supportpage.isservicesCorrect();
            await supportpage.urlServicesChecking();
            break; 
            
      case 'Sign Up form':
          await supportpage.isregisterformVisible();
          await supportpage.urlSignupChecking();
          break;
  
      default:
          console.log('Can not find title');
    }
});

Then('{string} title was displayed. User stays on the same page', async (title) => {
    await searchpage.isresulttitleVisible();
    //await searchpage.isresulttitleCorrect();
    await searchpage.urlAboutChecking();
});
  
  Then('User was redirected to the {string} page. Sign in form was displayed', async (title) => {
    await searchpage.urlAboutChecking();
});
