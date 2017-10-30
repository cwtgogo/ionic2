import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageCardPage } from './image-card';

@NgModule({
  declarations: [
    ImageCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageCardPage),
  ],
})
export class ImageCardPageModule {}
