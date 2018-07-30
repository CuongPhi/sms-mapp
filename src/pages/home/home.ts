import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvProvider } from '../../providers/auth-prov/auth-prov';
import { LoginPage } from '../login/login';
import { Tabs } from 'ionic-angular/umd/navigation/nav-interfaces';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  currUser;
  constructor(public navCtrl: NavController, public authProv: AuthProvProvider) {

  }
  ionViewWillEnter(){
  
   }
ngOnInit(){

}
}
