import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewdataProvider } from './../../providers/newdata/newdata';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public news:NewdataProvider) {
    for (let i = 0; i < 30; i++) {
      this.news.load()
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.news.data.push(this.news.data[i]);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
