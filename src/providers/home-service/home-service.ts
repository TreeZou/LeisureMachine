import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class HomeServiceProvider {

  public cardListData: Object;

  constructor(public http: HttpClient, private httpProvide: Http) {
    console.log('Hello HomeServiceProvider Provider');
  }
  
  /**
   * 描述首页展示卡片信息
   */
  showMessages() {
    return this.httpProvide.request('http://jsonplaceholder.typicode.com/photos')
  }

}
