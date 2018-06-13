import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ToastMessageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastMessageServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ToastMessageServiceProvider Provider');
  }


  
  /**
   * Shows tip
   * @param [content] 提示内容
   * @param [duration] 提示时间
   * @param [position] 提示位置
   * @description 显示提示信息
   */
  showTip(content: string = '', duration: any = 'short', position: string = 'center'): void {
    // (<any>window).plugins.toast.showWithOptions({
    //     message: content,
    //     duration: duration, // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
    //     position: position,
    //     addPixelsY: -10  // added a negative value to move it up a bit (default 0)
    // });

    (<any>window).plugins.toast.show(content, duration, position);
  }

  
  
  /**
   * Hides tip
   * @description 隐藏提示信息
   */
  hideTip(): void {
    (<any>window).plugins.toast.hide();
  }

}
