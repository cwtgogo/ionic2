import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GesturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {
  tap:number = 0;
  press:number = 0;
  pan:number = 0;
  swipe:number = 0;
  rotate:number = 0;
  pinch:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GesturesPage');
  }

  tapEvent(event){
    this.tap++;
  }
  pressEvent(event){
    this.press++;
  }
  panEvent(event){
    this.pan++;
  }
  swipeEvent(event){
    this.swipe++;
  }
  rotateEvent(event){
    this.rotate++;
  }
  pinchEvent(event){
    this.pinch++;
  }

}
