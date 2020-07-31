import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the IndividualItem1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-individual-item7',
  templateUrl: 'individual-item7.html'
})
export class IndividualItem7Page {

  constructor(public navCtrl: NavController) {

  }

  redirectToProductCatalog() {
    this.navCtrl.pop();
  }

  redirectToHome() {
    this.navCtrl.popToRoot();
  }

}
