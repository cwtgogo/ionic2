import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundCardPage } from './background-card';

@NgModule({
  declarations: [
    BackgroundCardPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundCardPage),
  ],
})
export class BackgroundCardPageModule {}
