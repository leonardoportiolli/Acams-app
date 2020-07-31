import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { EnterpriseItem1Page } from '../enterprise-item1/enterprise-item1';
import { EnterpriseItem2Page } from '../enterprise-item2/enterprise-item2';
import { EnterpriseItem3Page } from '../enterprise-item3/enterprise-item3';
import { IndividualItem3Page } from '../individual-item3/individual-item3';
import { EnterpriseItem4Page } from '../enterprise-item4/enterprise-item4';
import { EnterpriseItem5Page } from '../enterprise-item5/enterprise-item5';
import { EnterpriseItem6Page } from '../enterprise-item6/enterprise-item6';

@Component({
	selector: 'page-enterprise',
	templateUrl: 'enterprise.html'
})
export class EnterprisePage {
	items: Array<{component: any, title: string, image: string}>;

	constructor(public navCtrl: NavController) {
		this.items = [
			{component: EnterpriseItem4Page, title: 'Enterprise Package', image: 'assets/imgs/enter.png'},
      {component: EnterpriseItem2Page, title: 'ACAMS Certification', image: 'assets/imgs/cert-2.png'},
      {component: IndividualItem3Page, title: 'Join our Live Events', image: 'assets/imgs/live.png'},
			{component: EnterpriseItem5Page, title: 'Risk Assessment Tool', image: 'assets/imgs/risk.png'},
			{component: EnterpriseItem6Page, title: 'Networking Community', image: 'assets/imgs/network.png'},
		];
	}

	itemTapped($event, item) {
		this.navCtrl.push(item.component);
	}
}
