import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { AboutPage } from '../about/about'

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl: ModalController, private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  
  
  /**
   * 退出
   */
  loginOut() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }


  
  /**
   * 跳到关于页面
   */
  toAbout() {
    this.navCtrl.push(AboutPage);
  }

}
