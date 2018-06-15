import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'

/**
 * @author Jackey
 * 统一样式
 */
@Injectable()
export class UniteStyleProvider {

  buttonArr: Object[];

  constructor(public http: HttpClient,
              public actionSheetCtrl: ActionSheetController) {
    
  }
 
  /**
   * 显示Action sheet
   */
  showActionPresent(title: string, content: any[]) {
    let actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: content.map(function(item) {
        return {
          text: item.text,
          role: item.role,
          handler: item.func
        }
      })
    });
    actionSheet.present();
  }

}
