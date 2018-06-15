import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { UniteStyleProvider } from '../../providers/unite-style/unite-style';
import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  actionArr: any[];

  pet: string
  searchQuery: string = '';
  items: string[];
  
  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              private uniteStyle: UniteStyleProvider,
              private toastMessageService: ToastMessageServiceProvider) {
    this.initializeItems();
    this.actionArr = [
      {
        text: '点一下',
        func: () => {
          this.toastMessageService.showTip("点了1");
        }
      },{
        text: 'Destructive',
        role: 'destructive',
        func: () => {
          this.toastMessageService.showTip("点了2");
        }
      },{
        text: 'Archive',
        func: () => {
          this.toastMessageService.showTip("点了3");
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        func: () => {
          this.toastMessageService.showTip("点了4");
        }
      }
    ];
  }

  ionViewDidLoad() {
    this.pet = 'kittens';
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  presentActionSheet() {
    this.uniteStyle.showActionPresent("测试", this.actionArr);
  }

}
