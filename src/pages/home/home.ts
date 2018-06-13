import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomeServiceProvider } from '../../providers/home-service/home-service'
import { LoadingService } from '../../services/loading/loading.service'
import { ToastServiceProvider } from '../../providers/toast-service/toast-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listData: Object;

  constructor(public navCtrl: NavController, 
              private homeService: HomeServiceProvider, 
              private loadingService: LoadingService,
              private toastService: ToastServiceProvider) {

  }

  ionViewDidLoad() {
    this.loadingService.showLoading("");
    this.homeService.showMessages().subscribe(res => {
      this.listData = res.json();
      this.loadingService.hideLoading();
    });
  }

  test(): void {
    console.log('1');
  }

}
