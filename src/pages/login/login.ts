import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from "ionic-angular";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { FormBuilder } from "@angular/forms";
import { AuthProvProvider } from "../../providers/auth-prov/auth-prov";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  formLogin;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fDB: FormBuilder,
    public authPr: AuthProvProvider,
    public alerCtrl: AlertController,
    public  loadCtrl:LoadingController
  ) {
    this.formLogin = fDB.group({
      email: [""],
      password: [""]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  onLoginWithFB(): void {
    console.log("login with fb");

    //this.navCtrl.popTo(HomePage)
    // this.navCtrl.parent.select(0);
  }
  onLoginWithGG(): void {
    console.log("login with gg");

    //this.navCtrl.popTo(HomePage)
  }
  signupPage(): void {
    this.navCtrl.setRoot(SignupPage);
  }
  onLoginWithEmail(): void {
    this.authPr
    .logIn(this.formLogin.value.email, this.formLogin.value.password)
    .then(user => {
      this.onLoginOK(user.user.uid);
    })
    .catch(err => {
      let alert = this.alerCtrl.create({
        message:err,
        title :'Thông báo !',
        buttons:[
          {
            text: 'OK',
            role :'cancel'
          }
        ]
      })
      alert.present();
    });
  }
  forgotPasswordPage(): void {
   
  }
  onLoginOK(userID:string):void {
    let loading = this.loadCtrl.create({
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.setRoot(TabsPage, {uid: userID});
    }, 1000);  
    loading.dismiss();
  }
}
