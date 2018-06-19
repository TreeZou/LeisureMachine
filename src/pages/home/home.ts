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
  items = [];
  exc = {
    'title': 'javascript是不是全世界最差的语言',
    'content': '很多人说javascript是全球最垃圾的语言，这样的解释是错误的。',
    'img': 'assets/imgs/person/head.png',
    'name': 'Jackey',
    'date': '2018-06-10'
  };

  excRe = {
    'title': 'javascript是不是全世界最差的语言',
    'content': '很多人说javascript是全球最垃圾的语言，这样的解释是错误的。',
    'img': '',
    'name': 'Jackey',
    'date': '2018-06-01'
  };

  constructor(public navCtrl: NavController, 
              private homeService: HomeServiceProvider, 
              private loadingService: LoadingService,
              private toastService: ToastServiceProvider,
              private toastMessageService: ToastMessageServiceProvider) {
              this.items.push(this.exc);
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
    setTimeout(() => {
      this.items.push(this.exc);
      infiniteScroll.complete();
    }, 500);

  }

  //下拉刷型界面
  doRefresh(refresher){
    //动态切换
    setTimeout(() => {
      this.items.unshift(this.excRe);
      refresher.complete();
    }, 500);
  }
}
