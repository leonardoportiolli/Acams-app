import { Directive, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductCatalogPage } from '../pages/product-catalog/product-catalog';

@Directive({
  selector: '[productCatalogRedirect]'
})
export class ProductCatalogRedirectDirective {

  constructor(el: ElementRef, navCtrl: NavController) {

    el.nativeElement.onclick = () => {
      navCtrl.push(ProductCatalogPage);
    };
  }
}
