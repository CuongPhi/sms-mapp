import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvProvider } from '../../providers/auth-prov/auth-prov';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage implements OnInit{
  currUser;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProv: AuthProvProvider) {
  }

  ionViewWillEnter(){
   // this.currUser = this.authProv.getCurrUser();
  
   }
ngOnInit(){
 
}
}
