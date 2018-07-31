import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserPage } from '../pages/user/user';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AuthProvProvider } from '../providers/auth-prov/auth-prov';
import { HttpClientModule } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook'
import { GooglePlus } from '../../node_modules/@ionic-native/google-plus';


@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    TabsPage,
    AccountPage,
    UserPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: false}),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AccountPage,
    UserPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvProvider,
    Facebook,GooglePlus
  ]
})
export class AppModule {}
