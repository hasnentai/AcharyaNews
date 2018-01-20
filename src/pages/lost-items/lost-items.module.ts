import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostItemsPage } from './lost-items';

@NgModule({
  declarations: [
    LostItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(LostItemsPage),
  ],
})
export class LostItemsPageModule {}
