
const page = require('./page');


const search_input = ('input[placeholder="Search"]');
const search_text = "testing";
const searh_results_title = ('[class="search-results__header"]');
const devops_button = ('a[data-ga-name="DevOps"]');
const devops_title = ('div[class="copy"]>h1');
const devops_text = "What is DevOps?";
const gitlab_link = ('a[href="https://gitlab.com/users/sign_in/"]');


class SearchPage extends page { 

        async enterSearchItem(){
           await this.setvalue(search_input,search_text);
        }

        async clickGitlabButton(){
           await this.click(gitlab_link);            
        }

        async clickdevopsButton(){
           await this.click(devops_button);        
        }

        async isresulttitleVisible(){
            await this.isdisplayed(searh_results_title);
        }

        async isresulttitleCorrect(){
            await this.checkElement(searh_results_title,search_text);
        }
        
        async isdevopsVisible(){
            await this.isdisplayed(devops_title);
          }
  
        async isdevopsCorrect(){
            await this.checkElement(devops_title,devops_text);
        }

        async urlAboutChecking(){
            await this.urlChecking('about');
        }

        async urlDevopsChecking(){
            await this.urlChecking('devops');
        }

        async urlSigninChecking(){
            await this.urlChecking('sign_in');
        }
       
}
module.exports = new SearchPage();
