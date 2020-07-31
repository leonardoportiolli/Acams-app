import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EnterpriseItem5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-enterprise-item5',
  templateUrl: 'enterprise-item5.html',
})
export class EnterpriseItem5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterpriseItem5Page');
  }

  redirectToProductCatalog() {
    this.navCtrl.pop();
  }

  redirectToHome() {
    this.navCtrl.popToRoot();
  }

}
