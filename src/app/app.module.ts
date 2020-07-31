import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Configs
import { environment } from '../environment/environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

// Services
import { CustomerService } from '../services/customer.service';

// Components
import { SpeakAccountExecutive } from '../components/speak-account-executive/speak-account-executive';

// Pages
import { IndividualPage } from '../pages/individual/individual';
import { IndividualItem1Page } from '../pages/individual-item1/individual-item1';
import { IndividualItem2Page } from '../pages/individual-item2/individual-item2';
import { IndividualItem3Page } from '../pages/individual-item3/individual-item3';
import { IndividualItem4Page } from '../pages/individual-item4/individual-item4';
import { IndividualItem5Page } from '../pages/individual-item5/individual-item5';
import { IndividualItem6Page } from '../pages/individual-item6/individual-item6';
import { IndividualItem7Page } from '../pages/individual-item7/individual-item7';
import { IndividualItem8Page } from '../pages/individual-item8/individual-item8';

import { EnterprisePage } from '../pages/enterprise/enterprise';
import { EnterpriseItem1Page } from '../pages/enterprise-item1/enterprise-item1';
import { EnterpriseItem2Page } from '../pages/enterprise-item2/enterprise-item2';
import { EnterpriseItem3Page } from '../pages/enterprise-item3/enterprise-item3';
import { EnterpriseItem4Page } from '../pages/enterprise-item4/enterprise-item4';
import { EnterpriseItem5Page } from '../pages/enterprise-item5/enterprise-item5';
import { EnterpriseItem6Page } from '../pages/enterprise-item6/enterprise-item6';

import { ProductCatalogPage } from '../pages/product-catalog/product-catalog';

// Directives
import { ProductCatalogRedirectDirective } from '../directives/product-catalog-redirect.directive';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndividualPage,
    EnterprisePage,
    IndividualItem1Page,
    IndividualItem2Page,
    IndividualItem3Page,
    IndividualItem4Page,
    IndividualItem5Page,
    IndividualItem6Page,
    IndividualItem7Page,
    IndividualItem8Page,
    EnterpriseItem1Page,
    EnterpriseItem2Page,
    EnterpriseItem3Page,
    EnterpriseItem4Page,
    EnterpriseItem5Page,
    EnterpriseItem6Page,
    ProductCatalogPage,
    SpeakAccountExecutive,
    ProductCatalogRedirectDirective,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrMaskerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndividualPage,
    EnterprisePage,
    IndividualItem1Page,
    IndividualItem2Page,
    IndividualItem3Page,
    IndividualItem4Page,
    IndividualItem5Page,
    IndividualItem6Page,
    IndividualItem7Page,
    IndividualItem8Page,
    EnterpriseItem1Page,
    EnterpriseItem2Page,
    EnterpriseItem3Page,
    EnterpriseItem4Page,
    EnterpriseItem5Page,
    EnterpriseItem6Page,
    ProductCatalogPage,
    SpeakAccountExecutive,
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CustomerService,
  ]
})
export class AppModule {}

