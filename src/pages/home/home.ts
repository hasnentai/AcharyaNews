import { NewsDetailsPage } from './../news-details/news-details';
import { NewdataProvider } from './../../providers/newdata/newdata';

import { NewsPage } from './../news/news';

import { NavController } from 'ionic-angular';
import { LostItemsPage } from './../lost-items/lost-items';
import { EventsPage } from './../events/events';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { Component, OnChanges, Input } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger(
      'enterAnimation', [
        state('show', style({
          opacity:1,
          position: 'fixed',
          zIndex:100,
          transform: 'translateX(100%)',
          
      })),
      state('hide', style({
          opacity:0,
          zIndex:-100,
          position: 'fixed',
          transform: 'translateX(-100%)',

      })),
      transition('show <=> hide', animate('500ms ease-in')),
      ]
    ),

  ],
})
export class HomePage {
  state: string = 'hide';
  show:boolean = false;
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;
  searchbar:any=false;
  constructor(public navCtrl: NavController, public news: NewdataProvider) {
    this.searchControl = new FormControl();
    for (let i = 0; i < 30; i++) {
      this.news.load()
    }
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.setFilteredItems();

    });

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



  nav() {
    this.navCtrl.push(NewsDetailsPage);
  }




  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
  }


  onSearchInput(){
    this.searching = true;
}




  setFilteredItems() {

    this.items = this.news.filterItems(this.searchTerm);
    for (let i = 0; i < 30; i++) {
      this.news.data.push(this.news.data[i]);
    }

  }

  animateMe() {
    this.state = (this.state === 'show' ? 'hide' : 'show');
    this.searchbar?this.searchbar=false:this.searchbar=true;
}
}
