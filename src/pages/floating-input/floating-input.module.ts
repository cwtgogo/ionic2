import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloatingInputPage } from './floating-input';

@NgModule({
  declarations: [
    FloatingInputPage,
  ],
  imports: [
    IonicPageModule.forChild(FloatingInputPage),
  ],
})
export class FloatingInputPageModule {}
