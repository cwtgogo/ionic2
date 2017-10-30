import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasicCardPage } from '../basic-card/basic-card';
import { ListCardPage } from '../list-card/list-card';
import { ImageCardPage } from '../image-card/image-card';
import { BackgroundCardPage } from '../background-card/background-card';
import { SocialCardPage } from '../social-card/social-card';
import { MapCardPage } from '../map-card/map-card';
/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  items:Array<{name:string,href:any}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [{
      name:'BasicCard',
      href:BasicCardPage,
    },{
      name:'ListCard',
      href:ListCardPage,
    },{
      name:'ImageCard',
      href:ImageCardPage,
    },{
      name:'BackgroundCard',
      href:BackgroundCardPage,
    },{
      name:'SocialCard',
      href:SocialCardPage,
    },{
      name:'MapCard',
      href:MapCardPage,
    }
    
    
    
    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

  itemSelected(event,item){
    this.navCtrl.push(item.href,{});
  }

}
