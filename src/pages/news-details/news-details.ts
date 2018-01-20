import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  num:any;
  colors:any=[]
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing) {
  this.num =Math.floor(Math.random() * 6) + 1 ;
  this.colors=[ "#673AB7","#3F51B5","#F44336","#E91E63","#9C27B0","#03A9F4","#00BCD4"]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  shareViaFacebook(){
    this.socialSharing.shareViaFacebook('helooo',null,'https://www.google.com').then((sec)=>{
      alert("suc"+JSON.stringify(sec));
    }).catch((e)=>{
      alert("ERR"+JSON.stringify(e));
    })
  }
  shareViaWhatsapp(){
    this.socialSharing.shareViaWhatsApp('helooo',null,'https://www.google.com').then((sec)=>{
      alert("suc"+JSON.stringify(sec));
    }).catch((e)=>{
      alert("ERR"+JSON.stringify(e));
    })
  }
  shareViaTwitter(){
    this.socialSharing.shareViaTwitter('helooo',null,'https://www.google.com').then((sec)=>{
      alert("suc"+JSON.stringify(sec));
    }).catch((e)=>{
      alert("ERR"+JSON.stringify(e));
    })
  }
  

}
