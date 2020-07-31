import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndividualItem3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-individual-item3',
  templateUrl: 'individual-item3.html',
})
export class IndividualItem3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividualItem3Page');
  }

  redirectToProductCatalog() {
    this.navCtrl.pop();
  }

  redirectToHome() {
    this.navCtrl.popToRoot();
  }

}
