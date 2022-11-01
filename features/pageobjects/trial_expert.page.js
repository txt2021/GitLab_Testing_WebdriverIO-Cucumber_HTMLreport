const page = require('./page');


const expert_title = ('h1[data-aos="zoom-in-up"]');
const title_text = "Talk to an Expert";
const trial_title = ('main div[class="row"]>div:nth-child(1) h2');
const trial_text = "Free 30-day trial";
const trial_form = ('div[class="signup-page"]');
const experts_form = ('div[class="form_container"]');


class TrialPage extends page{   

    
        async istitleCorrect(){
          await this.checkElement(expert_title,title_text);
        }

        async istitleVisible(){
          await this.isdisplayed(expert_title);
        }

        async istrialCorrect(){
          await this.checkElement(trial_title,trial_text);
          }
  
        async istrialVisible(){
          await this.isdisplayed(trial_title);
          }

        async istrialformVisible(){
          await this.isdisplayed(trial_form);
          }

        async isexpertsformVisible(){
          await this.isdisplayed(experts_form);
          }

        async urlSalesChecking(){
          await this.urlChecking('sales');
            }

        async urlTrialChecking(){
          await this.urlChecking('trial_registrations');
                }

}

module.exports = new TrialPage();
