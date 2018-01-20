import { ParallaxHeaderDirective } from './../directives/parallax-header/parallax-header';
import { NewsDetailsPage } from './../pages/news-details/news-details';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SamplePage } from './../pages/sample/sample';
import { NewsPage } from './../pages/news/news';
import { TabsPage } from './../pages/tabs/tabs';
import { LostItemsPage } from './../pages/lost-items/lost-items';
import { EventsPage } from './../pages/events/events';
import { SettingsPage } from './../pages/settings/settings';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
//import { SuperTabsModule } from 'ionic2-super-tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
ParallaxHeaderDirective




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewdataProvider } from '../providers/newdata/newdata';

@NgModule({
  
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    LostItemsPage,
    EventsPage,
    TabsPage,
    NewsPage,
    SamplePage,
    NewsDetailsPage,
    ParallaxHeaderDirective
   
  

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
      tabsPlacement: 'bottom',
      HttpModule,
      
      
      platforms: {
        ios: {
          tabsPlacement: 'top',
        },
        android:{
          tabsPlacement: 'top',
        }
      }
    }),
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    LostItemsPage,
    EventsPage,
    TabsPage,
    NewsPage,
    SamplePage,
    NewsDetailsPage,
   
  ],
  providers: [
    NewdataProvider,
    StatusBar,
    SplashScreen,   
    SocialSharing,     
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
   
  ]
})
export class AppModule {}
