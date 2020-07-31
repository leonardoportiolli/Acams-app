import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { IndividualItem1Page } from '../individual-item1/individual-item1';
import { IndividualItem2Page } from '../individual-item2/individual-item2';
import { IndividualItem3Page } from '../individual-item3/individual-item3';
import { IndividualItem4Page } from '../individual-item4/individual-item4';
import { IndividualItem5Page } from '../individual-item5/individual-item5';
import { IndividualItem6Page } from '../individual-item6/individual-item6';
import { EnterpriseItem4Page } from '../enterprise-item4/enterprise-item4';
import { EnterpriseItem5Page } from '../enterprise-item5/enterprise-item5';

@Component({
	selector: 'page-product-catalog',
	templateUrl: 'product-catalog.html'
})
export class ProductCatalogPage {
	items: Array<{component: any, title: string, image: string}>;

	constructor(public navCtrl: NavController) {
		this.items = [
      {component: IndividualItem1Page, title: 'Become an ACAMS Member', image: 'assets/imgs/member.png'},
      {component: IndividualItem2Page, title: 'Get CAMS Certified', image: 'assets/imgs/certified.png'},
      {component: IndividualItem3Page, title: 'Join our Training Events Events', image: 'assets/imgs/live.png'},
      {component: IndividualItem4Page, title: 'Online Training', image: 'assets/imgs/Training.png'},
      {component: IndividualItem5Page, title: 'Information Resources', image: 'assets/imgs/tec.png'},
      {component: IndividualItem6Page, title: 'Networking Community', image: 'assets/imgs/network.png'},
      {component: EnterpriseItem4Page, title: 'Enterprise Package', image: 'assets/imgs/online.png'},
      {component: EnterpriseItem5Page, title: 'Risk Assessment Tool', image: 'assets/imgs/risk.png'},
		];
	}

	itemTapped($event, item) {
		this.navCtrl.push(item.component);
	}
}
