import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { AccountPage } from '../account/account';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = UserPage;
  tab3Root = AccountPage;
  constructor(public navParams: NavParams) {
    let uid= navParams.get('uid');
    console.log(uid)
  }
}
