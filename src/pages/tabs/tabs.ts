import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { AccountPage } from '../account/account';
import { NavParams } from 'ionic-angular';
import { AuthProvProvider } from '../../providers/auth-prov/auth-prov';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabsEnabled = true;

  tab1Root = HomePage;
  tab2Root = UserPage;
  tab3Root = AccountPage;
  currUser=null;
  constructor(public navParams: NavParams, public authProv:AuthProvProvider) {
    // let uid= navParams.get('uid');
       
  }
  enableTabs(enable: boolean): void {
    this.tabsEnabled = enable;
}
}
