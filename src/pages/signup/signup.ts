import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormBuilder } from '@angular/forms';
import { AuthProvProvider } from '../../providers/auth-prov/auth-prov';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  formSignup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public fBD: FormBuilder, public authPrv: AuthProvProvider, public alertCrl:AlertController) {
    this.formSignup=fBD.group({
      email: [''],
      password: ['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signinPage():void{
    this.navCtrl.setRoot(LoginPage);
  }
  onSignup():void{
    this.authPrv.signUp(this.formSignup.value.email, this.formSignup.value.password).
    then((user)=>{
      
      var alert =this.alertCrl.create({       
        title: 'Thông báo !',
        message: 'Đăng ký thành công, Tới trang đăng nhập !',
        buttons: [
          {
            text: 'OK',
            role: "cancel"
          }
        ]
      });
      alert.present().then(()=>this.navCtrl.setRoot(LoginPage));
      
    }).catch(err=> {
      var alert =this.alertCrl.create({
        message: err,
        title: 'Thông báo !',
        buttons: [
          {
            text: 'OK',
            role: "cancel"
          }
        ]
      });
      alert.present();
    })
  }
}
