import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/**
 * loading显示工具类
 */
@Injectable()
export class LoadingService {
    
    loading: any;
    loadingIsOpen: boolean;

    constructor(public loadingCtrl: LoadingController) {

    }

    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    showLoading(content: string = ''): void {
        if(!content) {
            content = "";
        }
        if(!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            })
            this.loading.present();
            setTimeout(() => { //最长显示10秒
                this.loadingIsOpen && this.loading.dismiss();
                this.loadingIsOpen = false;
             }, 10000);
        }
    }

    /**
     * 统一调用此方法隐藏loading
     */
    hideLoading(): void {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    }

}