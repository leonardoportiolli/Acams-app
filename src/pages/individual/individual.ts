import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { IndividualItem1Page } from '../individual-item1/individual-item1';
import { IndividualItem2Page } from '../individual-item2/individual-item2';
import { IndividualItem3Page } from '../individual-item3/individual-item3';
import { IndividualItem4Page } from '../individual-item4/individual-item4';
import { IndividualItem5Page } from '../individual-item5/individual-item5';
import { IndividualItem6Page } from '../individual-item6/individual-item6';

@Component({
	selector: 'page-individual',
	templateUrl: 'individual.html'
})
export class IndividualPage {
	items: Array<{title: string, image: string, component: any}>;

	constructor(public navCtrl: NavController) {
		this.items = [
			{component: IndividualItem1Page, title: 'Become an ACAMS Member', image: 'assets/imgs/member.png'},
			{component: IndividualItem2Page, title: 'Get CAMS Certified', image: 'assets/imgs/certified.png'},
			{component: IndividualItem3Page, title: 'Join our Training Events', image: 'assets/imgs/live.png'},
			{component: IndividualItem4Page, title: 'Online Training', image: 'assets/imgs/Training.png'},
			{component: IndividualItem5Page, title: 'Information Resources', image: 'assets/imgs/tec.png'},
			{component: IndividualItem6Page, title: 'Networking Community', image: 'assets/imgs/network.png'},
		];
	}

	itemTapped($event, item) {
		this.navCtrl.push(item.component);
	}
}
