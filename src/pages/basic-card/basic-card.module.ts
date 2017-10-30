import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicCardPage } from './basic-card';

@NgModule({
  declarations: [
    BasicCardPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicCardPage),
  ],
})
export class BasicCardPageModule {}
