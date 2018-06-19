import { Component, Input } from '@angular/core';
import { NavController, DateTime } from 'ionic-angular';

import { SearchPage } from '../search/search';

import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { LoadingService } from '../../services/loading/loading.service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  time: string;
  listData: Object;
  myDate: any;
  nowTime: any;

  constructor(public navCtrl: NavController, 
              private homeService: HomeServiceProvider, 
              private loadingService: LoadingService,
              private toastService: ToastServiceProvider,
              private toastMessageService: ToastMessageServiceProvider) {
              this.time = '2018-06-10';
  }

  ionViewDidLoad() {
    document.getElementsByTagName("ion-searchbar")[0].getElementsByTagName("input")[0].setAttribute("readonly","readonly");
    this.myDate = new Date();
  }

  ngOnInit() {

  }

  toSearchPage(): any {
    this.navCtrl.push(SearchPage);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  }
}
