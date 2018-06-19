import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import { Storage } from '@ionic/storage';

import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: []
})
export class LoginPage {


  constructor(public modalCtrl: ModalController,
              private toastMessageService: ToastMessageServiceProvider,
              private storage: Storage) {
                if(this.storage.get("name")) {
                  console.log("有这个值", this.storage.get("name").then((val) => {
                    console.log("val的值:", val);
                  }));
                }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.toastMessageService.showTip("请输入账号");
    } else if (password.value.length == 0) {  
      this.toastMessageService.showTip("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      this.storage.set("name", username.value);
      this.storage.set("password", password.value);

      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }

}
