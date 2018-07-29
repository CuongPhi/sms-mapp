import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  LoadingController,
  Config
} from "ionic-angular";
import { LoginPage } from "../login/login";
import { AuthProvProvider } from "../../providers/auth-prov/auth-prov";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html"
})
export class AccountPage implements OnInit {
  currUser;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProv: AuthProvProvider,
    public alertCtrl: AlertController,
    public loadCtrl:LoadingController,
    public config:Config
  ) {}

  ionViewDidLoad() {
  }
  
 ionViewDidEnter(){

 }
 ionViewWillEnter(){
  this.currUser = this.authProv.getCurrUser();

 }
  onLogOut(): void {  
    this.authProv.logOutUser().then(()=>{
      let loading = this.loadCtrl.create({
        content: 'Đang đăng xuất ...'
      });
    
      loading.present();
    
      setTimeout(() => {
        this.navCtrl.parent.select(0);
      }, 1000);  
      loading.dismiss();  
    })
    .catch(err => console.log(err));
  }
  ngOnInit(): void {

  }
  DeleteUser() {
  //   const prompt = this.alertCtrl.create({
  //     title: "Đăng xuất",
  //     message: "Điền mật khẩu để đăng xuất",
  //     inputs: [
  //       {
  //         name: "password",
  //         placeholder: "Mật khẩu đăng nhập"
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: "Cancel",
  //         handler: data => {
  //           console.log(data.password);
  //         }
  //       },
  //       {
  //         text: "OK",
  //         handler: data => {
  //           console.log("OK clicked");
  //           this.authProv
  //             .reAuthen(data.password)
  //             .then(() => {
  //               this.authProv
  //                 .DeleteCurrUser()
  //                 .then(() => {
  //                   // logout ok, code here
  //                   console.log("log out ok with password !");
  //                   this.navCtrl.setRoot(TabsPage)
  //                 })
  //                 .catch(err => {
  //                   const alert = this.alertCtrl.create({
  //                     title: "Có lỗi !",
  //                     message: err,
  //                     buttons: ["OK"]
  //                   });
  //                   alert.present();
  //                 });
  //             })
  //             .catch(err => {
  //               const alert = this.alertCtrl.create({
  //                 title: "Mật khẩu không chính xác !",
  //                 message: 'Hãy thử lại !',
  //                 buttons: ["OK"]
  //               });
  //               alert.present();
  //             });
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
   }
   goLoginPage(){
     this.navCtrl.setRoot(LoginPage);
   }
}
