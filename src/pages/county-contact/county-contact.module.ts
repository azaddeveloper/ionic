import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountyContactPage } from './county-contact';

@NgModule({
  declarations: [
    CountyContactPage,
  ],
  imports: [
    IonicPageModule.forChild(CountyContactPage),
  ],
})
export class CountyContactPageModule {}
