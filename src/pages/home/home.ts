import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetsPage } from '../action-sheets/action-sheets';
import { AlertsPage } from '../alerts/alerts';
import { BadgesPage } from '../badges/badges';
import { ButtonsPage } from '../buttons/buttons';
import { CardsPage } from '../cards/cards';
import { CheckboxPage } from '../checkbox/checkbox';
import { DateTimePage } from '../date-time/date-time';
import { FabsPage } from '../fabs/fabs';
import { GesturesPage } from '../gestures/gestures';
import { GridPage } from '../grid/grid';
import { IconsPage } from '../icons/icons';
import { InputsPage } from '../inputs/inputs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items:Array<{name:string;href:any}>;

  constructor(public navCtrl: NavController) {
      this.items=[
{name:'Action Sheets',href:ActionSheetsPage},
{name:'Alerts',href:AlertsPage},       
{name:'Badges',href:BadgesPage},   
{name:'Buttons',href:ButtonsPage},   
{name:'Cards',href:CardsPage},          
{name:'Checkbox',href:CheckboxPage},
{name:'DateTime',href:DateTimePage},       
{name:'FABs',href:FabsPage},   
{name:'Gestures',href:GesturesPage},   
{name:'Grid',href:GridPage},  
{name:'Icons',href:IconsPage},
{name:'Inputs',href:InputsPage},       
{name:'Lists',href:''},   
{name:'Loading',href:''},   
{name:'Menus',href:''},  
{name:'Modals',href:''},
{name:'Navigation',href:''},       
{name:'Popover',href:''},   
{name:'Radio',href:''},   
{name:'Range',href:''},  
{name:'Searchbar',href:''},
{name:'Segment',href:''},       
{name:'Select',href:''},   
{name:'Slides',href:''},   
{name:'Tabs',href:''},  
{name:'Toast',href:''},  
{name:'Toggle',href:''},  
{name:'Toolbar',href:''}
        ];



  }


  itemSelected(event,item){
    this.navCtrl.push(
      item.href,
      {

      }
    );

  }

}
