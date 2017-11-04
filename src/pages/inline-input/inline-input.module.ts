import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InlineInputPage } from './inline-input';

@NgModule({
  declarations: [
    InlineInputPage,
  ],
  imports: [
    IonicPageModule.forChild(InlineInputPage),
  ],
})
export class InlineInputPageModule {}
