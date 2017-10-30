import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
/**
 * Generated class for the ActionSheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl:ActionSheetController,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetsPage');
  }

  presentActionSheet(){
     let actionSheet = this.actionSheetCtrl.create({
       title:'Modify your album',
       buttons:[
         {
            text:'Destructive',
            role:'Destructive',
            handler:()=>{
                this.presentToast('Destructive',Time.Short);
            }
         },
          {
            text:'Archive',
            handler:()=>{
                this.presentToast('Archive',Time.Short);
            }
         },
          {
            text:'Cancel',
            role:'Cancel',
            handler:()=>{
                this.presentToast('Cancel',Time.Short);
            }
         },
       ],

     })


     actionSheet.present();
  }



  presentToast(msg:string,time:Time){
    let toast = this.toastCtrl.create({
      message:msg,
      duration:time,
    });
    toast.present();
  }

}

enum Time { Long = 5000, Short = 3000 } ;

