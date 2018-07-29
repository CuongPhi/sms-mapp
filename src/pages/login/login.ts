import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Config } from "ionic-angular";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { FormBuilder } from "@angular/forms";
import { AuthProvProvider } from "../../providers/auth-prov/auth-prov";
import { TabsPage } from "../tabs/tabs";
import { Tabs } from "ionic-angular/umd/navigation/nav-interfaces";
import { AccountPage } from "../account/account";

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
  tabsPage;
  currUser;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fDB: FormBuilder,
    public alerCtrl: AlertController,
    public  loadCtrl:LoadingController,
    public authProv: AuthProvProvider,
    public config:Config
  ) {
    this.formLogin = fDB.group({
      email: [""],
      password: [""]
    });
    //this.config.set('tabsHideOnSubPages', true)

  }
  ionViewDidEnter() {  
    this.tabsPage  = (this.navCtrl.parent as Tabs).viewCtrl.instance;
    this.tabsPage.enableTabs(false);        
  }
  ionViewDidLoad() {
    this.currUser = this.authProv.getCurrUser();
  }
  
  onLoginWithFB(): void {
    this.authProv.facebookLogin()
    .then(user=>{
      //console.log(user);
      this.onLoginOK();
    })
    .catch(err=>{
     // console.log(err)
    })

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
    this.authProv
    .logIn(this.formLogin.value.email, this.formLogin.value.password)
    .then(user => {
      this.onLoginOK();
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
  onLoginOK():void {
    let loading = this.loadCtrl.create({
      content: 'Loading Please Wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.tabsPage.enableTabs(true);
      this.navCtrl.parent.select(0);
    }, 1000);  
    loading.dismiss();
  }
  getUserEmail (){
    return this.currUser ? this.currUser.email :'no email';
  }
  closeLogin(){
    this.tabsPage.enableTabs(true);  
    this.navCtrl.parent.select(0);
  }
}
