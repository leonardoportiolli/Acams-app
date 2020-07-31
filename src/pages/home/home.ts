import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IndividualPage } from '../individual/individual';
import { EnterprisePage } from '../enterprise/enterprise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  chooseEnterprise() {
  	console.log('Enterprise choose');
  	this.navCtrl.push(EnterprisePage);
  }

  chooseIndividual() {
  	console.log('Individual choose');
  	this.navCtrl.push(IndividualPage);
  }

}
