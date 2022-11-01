const page = require('./page');

const contact_button = ('ul[class="support-dropdown_item"] li>a[href="/support/"]');
const contact_result = ('div[role="main"] h1');
const contact_result_text = "GitLab Support";
const gethelp_button = ('ul[class="support-dropdown_item"] li>a[href="/get-help/"]');
const gethelp_result_text = "Help Topics";
const services_button = ('ul[class="support-dropdown_item"] li>a[href="/services/"]');
const services_result = ('div[class="blank-header"] h1');
const services_result_text = "GitLab Professional Services";
const sales_button = ('ul[class="support-dropdown_item"] li>a[href="/sales/"]');
const sales_result = ('h1[data-aos="zoom-in-up"]');
const sales_result_text = "Talk to an Expert";
const register_button = ('[data-nav="register"]');
const register_form = ('div[class="signup-page"]');


class SupportPage extends page{   
   
        async clickcontsctButton(){
            await this.click(contact_button);        
        }

        async clickgethelpButton(){
            await this.click(gethelp_button);        
        } 
        
        async clickservicesButton(){
            await this.click(services_button);        
        }

        async clicksalesButton(){
            await this.click(sales_button);        
        }

        async clickregisterButton(){
            await this.click(register_button);        
        }

        async isresultVisible(){
            await this.isdisplayed(contact_result);
        }
  
        async iscontactCorrect(){
            await this.checkElement(contact_result,contact_result_text);
        }
        
        async isgethelpCorrect(){
            await this.checkElement(contact_result,gethelp_result_text);
        }
        
        async isservicesVisible(){
            await this.isdisplayed(services_result);
        }
  
        async isservicesCorrect(){
            await this.checkElement(services_result,services_result_text);
        }
       
        async issalesVisible(){
            await this.isdisplayed(sales_result);
        }
  
        async issalesCorrect(){
            await this.checkElement(sales_result,sales_result_text);
        }
        
        async isregisterformVisible(){
            await this.isdisplayed(register_form);
        }

        async urlSupportChecking(){
            await this.urlChecking('support');
        }

        async urlGethelpChecking(){
            await this.urlChecking('get-help');
        }

        async urlServicesChecking(){
            await this.urlChecking('services');
        }

        async urlSalesChecking(){
            await this.urlChecking('sales');
        }

        async urlSignupChecking(){
            await this.urlChecking('sign_up');
        }

       
}
module.exports = new SupportPage();
