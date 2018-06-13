import { Component, ViewChild } from '@angular/core';

import { Platform, Tabs } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingPage } from '../setting/setting';
import { HomePage } from '../home/home';

// services
import { BackButtonService } from '../../services/backButton.service'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public backButtonService: BackButtonService,
    private platform: Platform) {

    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '主页',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: '联系',
        tabIcon: 'notifications'
      },
      {
        root: AboutPage,
        tabTitle: '关于',
        tabIcon: 'document'
      },
      {
        root: SettingPage,
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];

    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }
}
