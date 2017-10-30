import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertsPage');
  }

  showBasicAlert(){
      let alert = this.alertCtrl.create({
        title:"Basic Alert Title",
        subTitle:'Basic Alert SubTitle',
        message:'Basic Alert Message',
        buttons:['OK'],

      });

      alert.present();
  }

  showPromptAlert(){
    let alert = this.alertCtrl.create({
      title:"Prompt Alert Title",
      subTitle:"Prompt Alert subTitle",
      message:"Prompt Alert Message",
      inputs:[{
        name:"msg",
        placeholder:"输入"
      }],
      buttons:[
        {
          text:"Cancel",
          handler:data=>{
            this.presentToast("取消",Time.Short);
          }
        },
        {
          text:"Ok",
          handler:data=>{
            this.presentToast('输入的内容：'+data.msg,Time.Short);
          }
        },
      ]
    })
    alert.present();

  }

  showConfirmationAlert(){
      let alert = this.alertCtrl.create({
        title:"Confirmation Alert Title",
        message:'Confirmation Alert Message',
        buttons:[{
          text:"Disagree",
          handler:()=>{
            this.presentToast("Disagree",Time.Short);
          }
        },{
          text:"Agree",
          handler:()=>{
            this.presentToast("Agree",Time.Short);
          }
        }],
      });
      alert.present();
  }

  showRadioAlert(){
    // let alert = this.alertCtrl.create({
    //   title:"Radio Alert Title",
    //   inputs:[
    //     {
    //       type:'radio',
    //       label:'Blue',
    //       value:'blue',
    //       checked:true,
    //     },
    //     {
    //       type:'radio',
    //       label:'Green',
    //       value:'green',
    //       checked:false,
    //     },
    //     {
    //       type:'radio',
    //       label:'Red',
    //       value:'red',
    //       checked:false,
    //     },
    //   ],
    //   buttons:[
    //     {
    //       text:"Cancel"
    //     },{
    //       text:"Ok",
    //       handler:data=>{
    //         this.presentToast(data,Time.Short);
    //       }
    //     }
    //   ]
    // })
    let alert = this.alertCtrl.create();
    alert.setTitle('Radio Alert Title');
    alert.addInput({
      type:"radio",
      label:"Blue",
      value:'blue',
      checked:true,
    });
    alert.addInput({
      type:"radio",
      label:"Green",
      value:'green',
      checked:false,
    });
    alert.addInput({
      type:"radio",
      label:"Red",
      value:'red',
      checked:false,
    });
    alert.addButton({
      text:'Cancel'
    });
    alert.addButton({
      text:"Ok",
      handler:data=>{
        this.presentToast('选中的是'+data,Time.Short);
      }
    })
    alert.present();
  }

  showCheckboxAlert(){
    let alert = this.alertCtrl.create();
    alert.addInput({
      type:'checkbox',
      label:'Blue',
      value:'blue',
      checked:true
    });
    alert.addInput({
      type:'checkbox',
      label:'Red',
      value:'red',
      checked:true
    });
    alert.addInput({
      type:'checkbox',
      label:'Green',
      value:'green',
      checked:false
    });
    alert.addButton('Cancle');
    alert.addButton({
        text:'Ok',
        handler:data=>{
          // data是一个数组
          console.log('Checkbox data:',data);
          this.presentToast(data);
        }
    });
    alert.present();
  }

  // Toast
  presentToast(msg:string,time?:Time){
    if(!time){
      time = Time.Short;
    }
    let toast = this.toastCtrl.create({
      message:msg,
      duration:time,
    });
    toast.present();
  }

}

enum Time { Long = 5000, Short = 3000 } ;
