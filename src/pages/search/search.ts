import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastMessageServiceProvider } from '../../providers/toast-message-service/toast-message-service';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toastMessageService: ToastMessageServiceProvider) {
  }

  ionViewDidLoad() {
   
  }

  onInput(e) {
    console.log(e.target.value);
    this.toastMessageService.showTip(e.target.value, '2000', 'bottom');
  }

}
