import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapCardPage } from './map-card';

@NgModule({
  declarations: [
    MapCardPage,
  ],
  imports: [
    IonicPageModule.forChild(MapCardPage),
  ],
})
export class MapCardPageModule {}
