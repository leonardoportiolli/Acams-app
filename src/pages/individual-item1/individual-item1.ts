import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the IndividualItem1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-individual-item1',
  templateUrl: 'individual-item1.html'
})
export class IndividualItem1Page {

  constructor(public navCtrl: NavController) {

  }

  redirectToProductCatalog() {
    this.navCtrl.pop();
  }

  redirectToHome() {
    this.navCtrl.popToRoot();
  }

}
