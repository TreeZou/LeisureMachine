import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { LoadingService } from '../../services/loading/loading.service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listData: Object;

  constructor(public navCtrl: NavController, 
              private homeService: HomeServiceProvider, 
              private loadingService: LoadingService,
              private toastService: ToastServiceProvider,
              private toastMessageService: ToastMessageServiceProvider) {

  }

  ionViewDidLoad() {
    
  }


  toSearch(): any {
    this.toastMessageService.showTip("进入搜索页面", '2000', 'bottom');
  }

}
