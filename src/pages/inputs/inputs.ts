import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FixedInlineInputPage } from '../fixed-inline-input/fixed-inline-input';
import { FloatingInputPage } from '../floating-input/floating-input';
import { InlineInputPage } from '../inline-input/inline-input';
import { InsetInputPage } from '../inset-input/inset-input';
import { PlaceholderInputPage } from '../placeholder-input/placeholder-input';
import { StackedInputPage } from '../stacked-input/stacked-input';
/**
 * Generated class for the InputsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {
  items:Array<{name:string,href:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // FixedInlineInputPage,
    // ,
    // ,
    // InsetInputPage,
    // PlaceholderInputPage,
    // StackedInputPage,
    this.items = [{
      name:'FixedInlineInput',href:FixedInlineInputPage
    },{
      name:'FloatingInput',href:FloatingInputPage
    },{
      name:'InlineInput',href:InlineInputPage
    },{
      name:'InsetInput',href:InsetInputPage
    },{
      name:'PlaceholderInput',href:PlaceholderInputPage
    },{
      name:'StackedInput',href:StackedInputPage
    },];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputsPage');
  }



}
