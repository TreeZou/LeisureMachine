import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// services
import { BackButtonService } from '../services/backButton.service'
import { TestServiceProvider } from '../providers/test-service/test-service';
import { HomeServiceProvider } from '../providers/home-service/home-service';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';

// loading工具
import { LoadingService } from '../services/loading/loading.service'
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { ToastMessageServiceProvider } from '../providers/toast-message-service/toast-message-service';
import { GithubTestServiceProvider } from '../providers/github-test-service/github-test-service';
import { SubTabsConfigureProvider } from '../providers/sub-tabs-configure/sub-tabs-configure';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SettingPage,
    MessagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true' ,       //隐藏全部子页面tabs
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SettingPage,
    MessagePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackButtonService,
    LoadingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestServiceProvider,
    HomeServiceProvider,
    ContactServiceProvider,
    ToastServiceProvider,
    ToastMessageServiceProvider,
    GithubTestServiceProvider,
    SubTabsConfigureProvider
  ]
})
export class AppModule {}
