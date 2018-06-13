import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController,
              private toastMessage: ToastMessageServiceProvider) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }  
  }

  showToast(): void {
    this.toastMessage.showTip("开始了", '1000', 'center');
  }
}
