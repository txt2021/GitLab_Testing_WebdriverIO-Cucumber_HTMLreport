const page = require('./page');


const login_button = ('[id="supportDropdown"]');
const sign_up_button = ('[data-nav="register"]');
const whygitlab_button = ('[name="Why GitLab"]');
const whygit_form = ('[id="be-navigation-desktop"] h2');
const platform_button = ('[name="Platform"]');
const platform_form = ('[class="slp-row menu_row"] h2');
const solutions_button = ('[name="Solutions"]');
const solutions_form = ('[class="slp-container menu_container"] h2')
const pricing_button =('[name="Pricing"]');
const pricing_title = ('[tag="h1"]')
const partners_button = ('[name="Partners"]');
const partners_form = ('[class="slp-row menu_row"] h2');
const resources_button = ('[name="Resources"]');
const resources_form = ('[class="menu_left-column slp-col-md-3"] h2');
const expert_button = ('[name="Talk to an expert"]');
const trial_button = ('[name="Get free trial"]');
const search_button = ('button[aria-label="Search"]');

const why_text = "Why GitLab";
const platform_text = "Platform";
const solutions_text = "Solutions";
const pricing_text = "Get The One  DevOps Platform"
const partners_text = "Partners";
const resources_text = "Resources";

class MainPage extends page{

    open() {
        super.open('https://about.gitlab.com/')
        }

    async clickLoginButton(){
        await this.click(login_button);    
        }

    async clicksignupButton(){
        await this.click(sign_up_button);
        }

    async clickwhygitlabButton(){
        await this.click(whygitlab_button);
        }

    async clickplatformButton(){
        await this.click(platform_button);
        }

    async clicksolutionsButton(){
        await this.click(solutions_button);
        }

    async clickpricingButton(){
        await this.click(pricing_button);
        }

    async clickpartnersButton(){
        await this.click(partners_button);
        }

    async clickresourcesButton(){
        await this.click(resources_button);
        }

    async clickexpertsButton(){
        await this.click(expert_button);
        }

    async clicktrialButton(){
        await this.click(trial_button);
        }

    async clicksearchButton(){
        await this.click(search_button);
        }

    async iswhyformVisible(){
        await this.isdisplayed(whygit_form);
        }

    async iswhyformCorrect(){
        await this.checkElement(whygit_form,why_text);
        }

    async isplatformformVisible(){
        await this.isdisplayed(platform_form);
        }

    async isplatformformCorrect(){
        await this.checkElement(platform_form,platform_text);
        }

    async issolutionsformVisible(){
        await this.isdisplayed(solutions_form);
        }

    async issolutionsformCorrect(){
        await this.checkElement(solutions_form,solutions_text);
        }

    async ispricingtitleVisible(){
        await this.isdisplayed(pricing_title);
        }

    async ispricingtitleCorrect(){
        await this.checkElement(pricing_title,pricing_text);
        }

    async ispartnerformVisible(){
        await this.isdisplayed(partners_form);
        }

    async ispartnersformCorrect(){
        await this.checkElement(partners_form,partners_text);
        }

    async isresourcesformVisible(){
        await this.isdisplayed(resources_form);
        }

    async isresourcesformCorrect(){
        await this.checkElement(resources_form,resources_text);
        }

    async urlAboutChecking(){
        await this.urlChecking('about');
        }

    async urlPricingChecking(){
        await this.urlChecking('pricing');
        }

}
module.exports = new MainPage()
