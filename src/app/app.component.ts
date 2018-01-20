import { LostItemsPage } from './../pages/lost-items/lost-items';
import { EventsPage } from './../pages/events/events';
import { SamplePage } from './../pages/sample/sample';
import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 



import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string,type:any, component: any,tabs:any,icon:string}>;
  activepage:any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', type:"tabs",component: TabsPage, tabs:0 ,icon:'md-home' },
      { title: 'Events', type:"tabs",component: TabsPage, tabs:1 ,icon:'md-calendar' },
      { title: 'Lost Items',type:"tabs", component: TabsPage, tabs:2 ,icon:'md-help-circle' },
      { title: 'Settings', type:"pages",component: SettingsPage, tabs:-1 ,icon:'md-settings' }
    ];
    this.activepage=this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    //this.nav.setRoot(page.component);
    if (page.type=="tabs"){
      this.nav.setRoot(TabsPage,{tab:page.tabs});
      //alert(page.tabs);
    }
    else {
      this.nav.setRoot(page.component);
    }
    this.activepage=page;
  }
  check(page){
    return page==this.activepage;
  }
}
