import { LostItemsPage } from './../lost-items/lost-items';
import { EventsPage } from './../events/events';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = EventsPage;
  tab3Root: any = LostItemsPage;
  activeTab:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.activeTab = navParams.get("tab")?navParams.get("tab"):0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
