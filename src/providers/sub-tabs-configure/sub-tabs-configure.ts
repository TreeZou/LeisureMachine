import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastMessageServiceProvider } from '../toast-message-service/toast-message-service'

/**
 * @author Jackey
 * @description 配置子分类
 */
@Injectable()
export class SubTabsConfigureProvider {

  subArr: string[] = [];

  /**
   * 建立子菜单数组
   */
  public subTabs: Array<Object>;

  constructor(public http: HttpClient,
            private toastMessageService: ToastMessageServiceProvider) {
    
  }

  /**
   * @author Jackey
   * @description 添加子菜单的方法
   * @returns 返回Json格式 
   */
  addSubTabs(subName: string): any {
    if(!subName) {
      this.toastMessageService.showTip("子菜单不能为空", '1500', 'bottom');
      return false;
    }

    //查询是否名称重复  
    this.checkNameIsRepeat(subName);

    //添加子菜单
  }

  /**
   * @author Jackey
   * @param subName 要删除菜单的名字 
   * @returns json
   * @description 删除菜单 
   */
  deleteSubTabs(subName: string): any {
    if(!subName) {
      this.toastMessageService.showTip("子菜单不能为空", '1500', 'bottom');
      return false;
    }
  }

  /**
   * @author Jackey
   * @param subName 要检查菜单的名字 
   * @returns json
   * @description  检查菜单名字是否重复
   */
  checkNameIsRepeat(subName: string): any {
    let count: number = 0;
    for(;count < this.subArr.length - 1; count++) {
       this.ergodicName(subName, count);
    }
  }

  /**
   * Ergodics name
   * @param subName 要比较菜单的名称
   * @param count 数组中的位置
   * @returns  
   * @description 遍历数组， 比较
   */
  ergodicName(subName: string, count: number) {
    if(subName == this.subArr[count]) {
      this.toastMessageService.showTip("子菜单已经存在", '1000', 'bottom');
      return ;
    }
  }

}
