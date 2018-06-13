import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastServiceProvider {

  toast: any;

  constructor(public http: HttpClient, private toastCtrl: ToastController) {
    console.log('Hello ToastServiceProvider Provider');
  }

  showToast(content: string = ''): void {
    this.toast = this.toastCtrl.create({
      message: content,
      duration: 1000
    });

    this.toast.present();
  }

}
