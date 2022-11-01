
const page = require('./page');

const user_firstname = ('[id="new_user_first_name"]');
const test_firstname = 'Tester';
const user_lastname = ('[id="new_user_last_name"]');
const test_surname = 'Smith';
const username = ('[id="new_user_username"]');
const test_name = 'tester_8976';
const user_email = ('[id="new_user_email"]');
const test_incorrect_email = 'fahafo5464';
const test_email = 'fahafo5464@civikli.com';
const password = ('[id="new_user_password"]');
const test_pass = 'testingpass';
const submit_button = ('[data-disable-with="Register"]');
const final_message = ('[class="gl-alert-body"]');
const email_message = ('[class="gl-field-error"]');
const capcha_text = "There was an error with the reCAPTCHA. Please solve the reCAPTCHA again.";
const email_text = "Please provide a valid email address.";
const signin_button = ('[href="/users/sign_in?redirect_to_referer=yes"]');
const firstname_error = ('[id="new_user_first_name"] ~[class="gl-field-error"]');
const lastname_error = ('[id="new_user_last_name"] ~[class="gl-field-error"]');
const empty_text = "This field is required.";
const saleforce_button = ('[href="/users/auth/salesforce"]');
const saleforce_form = ('[id="content"]');


class SignUpPage extends page {

    async enterFirstname(){
        await this.setvalue(user_firstname,test_firstname);
        }

    async enterLastname(){
        await this.setvalue(user_lastname,test_surname);
        }
  
    async enterUsername() {
        await this.setvalue(username,test_name);
        }

    async enterEmail(){
        await this.setvalue(user_email,test_email);
        }
  
    async enterwrongEmail(){
        await this.setvalue(user_email,test_incorrect_email);
        }
  
    async enterPassword(){
        await this.setvalue(password,test_pass);
        }

    async clicksubmitButton(){
        await this.click(submit_button);
        }

    async clicksigninButton(){
        await this.click(signin_button);        
        }

    async clicksaleforceButton(){
        await this.click(saleforce_button);        
        }

    async ismessageVisible(){
        await this.isdisplayed(final_message);
        }

    async isemailmessageVisible(){
        await this.isdisplayed(email_message);
        }

    async ismessageCorrect(){
        await this.checkElement(final_message,capcha_text);
        }

    async isemailmessageCorrect(){
        await this.checkElement(email_message,email_text);
        }

    async isemptynameVisible(){
        await this.isdisplayed(firstname_error);
        }
  
    async isemptysurnameVisible(){
        await this.isdisplayed(lastname_error);
        }
  
    async isemptynameCorrect(){
        await this.checkElement(firstname_error,empty_text);
        }
  
    async isemptysurnameCorrect(){
        await this.checkElement(lastname_error,empty_text);
        }
  
    async issaleforceVisible(){
        await this.isdisplayed(saleforce_form);
        }

    async urlUserChecking(){
        await this.urlChecking('users');
        }

    async urlSignupChecking(){
        await this.urlChecking('sign_up');
        }

    async urlSaleforceChecking(){
        await this.urlChecking('salesforce');
        }


}

module.exports = new SignUpPage();
