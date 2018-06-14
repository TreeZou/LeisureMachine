import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SubTabsConfigureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

/**
 * @author Jackey
 * @description 配置子分类
 */
@Injectable()
export class SubTabsConfigureProvider {


  
  /**
   * 建立子菜单数组
   */
  public subTabs: Array<Object>;

  constructor(public http: HttpClient) {
    
  }


  
  /**
   * @author Jackey
   * @description 添加子菜单的方法
   * @returns 返回Json格式 
   */
  addSubTabs(): any {}

}
