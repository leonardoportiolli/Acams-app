import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IndividualItem7Page } from '../individual-item7/individual-item7';
import { IndividualItem8Page } from '../individual-item8/individual-item8';

/**
 * Generated class for the IndividualItem5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-individual-item5',
  templateUrl: 'individual-item5.html',
})
export class IndividualItem5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndividualItem5Page');
  }

  redirectToAcamsToday() {
    this.navCtrl.push(IndividualItem7Page);
  }

  redirectToAcamslounderingdotcom() {
    this.navCtrl.push(IndividualItem8Page);
  }

  redirectToProductCatalog() {
    this.navCtrl.pop();
  }

  redirectToHome() {
    this.navCtrl.popToRoot();
  }

}
