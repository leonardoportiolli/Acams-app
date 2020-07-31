import { Component } from '@angular/core';
import { AlertController, ViewController } from 'ionic-angular';
import { BrMaskerIonic3, BrMaskModel } from 'brmasker-ionic-3';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'speak-account-executive',
  templateUrl: 'speak-account-executive.html',
  providers: [BrMaskerIonic3],
})
export class SpeakAccountExecutive {
  constructor(
    public alertctrl: AlertController,
    private customers: CustomerService,
    public brMaskerIonic3: BrMaskerIonic3,
    public viewCtrl: ViewController
  ) { }

  speakToAccountExecutive() {
    const that = this;

    const prompt = this.alertctrl.create({
      title: 'Enter your name',
      message: "Please enter your information to speak to an Account Executive",
      inputs: [
        {
          name: 'name',
          placeholder: 'Your Name'
        },
        {
          name: 'telephone',
          placeholder: 'Your Phone Number',
          type: 'tel',
          id: 'telephone'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Submit',
          handler: data => {
            if (!data.name) return false;

            if (!data.telephone) return false;

            that.registerCustomerInTheQueue({
              id: '' + (new Date).getTime(),
              name: data.name,
              telephone: data.telephone,
              subject: that.viewCtrl.getContent()._app._title,
              status: 0,
              created: (new Date).getTime()
            });

            this.showAlert(data.name);
          }
        }
      ]
    });

    prompt.present().then(v => {
      let inputElement = <HTMLInputElement>document.getElementById('telephone');

      inputElement.addEventListener('keyup', (e) => {
        let inputValue = inputElement.value;

        let formattedValue = this.createPhone(inputValue);

        inputElement.value = formattedValue;
      });
    });
  }

  private createPhone(tel): string {
    const config: BrMaskModel = new BrMaskModel();

    config.mask = '(000) 000-0000';
    config.len = 14;
    config.type = 'num';

    return this.brMaskerIonic3.writeCreateValue(tel, config);
  }

  private showAlert(name) {
    const alert = this.alertctrl.create({
      title: 'Thank You!',
      subTitle: `Dear ${name}, you was queued into our Waiting Listing, as soon as possible you will be called.`,
      buttons: ['OK']
    });

    alert.present();
  }

  registerCustomerInTheQueue(customer) {
    return this.customers.add(customer);
  }
}
