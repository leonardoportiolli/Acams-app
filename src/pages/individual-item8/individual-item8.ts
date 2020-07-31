import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the IndividualItem1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-individual-item8',
  templateUrl: 'individual-item8.html'
})
export class IndividualItem8Page {

  constructor(public navCtrl: NavController) {

  }

  redirectToProductCatalog() {
    this.navCtrl.pop();
  }

  redirectToHome() {
    this.navCtrl.popToRoot();
  }

}
