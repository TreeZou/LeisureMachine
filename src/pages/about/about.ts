import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service';
import { GithubTestServiceProvider } from '../../providers/github-test-service/github-test-service'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  sliderArrs: Object;

  constructor(public navCtrl: NavController,
              private toastMessage: ToastMessageServiceProvider,
              private GithubTestService: GithubTestServiceProvider) {
  }

  ionViewDidLoad() {
    this.sliderArrs = [
      {
        'title': '标题一',
        'image': '../../assets/imgs/slider/img-132d5b2c9bbabd8c17c7a0c570e890d6.jpg' 
      },
      {
        'title': '标题二',
        'image': '../../assets/imgs/slider/img-2508a10ac05193391961b4fd94553015.jpg' 
      }
    ];
  }

  showToast(): void {
    this.toastMessage.showTip("开始了", '1000', 'center');
  }

}
