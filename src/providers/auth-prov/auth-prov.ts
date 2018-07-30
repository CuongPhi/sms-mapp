import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook'
import { resolveDefinition } from '../../../node_modules/@angular/core/src/view/util';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrtkXM89INm6Tl0onYyvTv7d-bJ1oacaU",
    authDomain: "sms-amapp.firebaseapp.com",
    databaseURL: "https://sms-amapp.firebaseio.com",
    projectId: "sms-amapp",
    storageBucket: "sms-amapp.appspot.com",
    messagingSenderId: "308605461456"
  };
 firebase.initializeApp(config);

@Injectable()
export class AuthProvProvider {

  constructor(public http: HttpClient, public facebook: Facebook) {
    console.log('Hello AuthProvProvider Provider');
  }
  signUp(email:string, password:string):Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email, password);

  }
  logIn(email:string, password:string):Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
  getCurrUserState():Promise<any>{
     return new Promise((resolve, reject)=>{
    firebase.auth().onAuthStateChanged(user=> 
      {
        if(user){
          resolve(user);
        }
        else{
          reject(('not login'));
        }
      }
    )
     })
  }
  getCurrUser():firebase.User{
    return firebase.auth().currentUser;
  }
  reAuthen(password:string):Promise<any> {
    let user = firebase.auth().currentUser;
    var credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );
     return user.reauthenticateWithCredential(credentials);
     
    }
    DeleteCurrUser():Promise<any>{
    let user = firebase.auth().currentUser;
    return  user.delete();
  }
  logOutUser():Promise<any>{
    return firebase.auth().signOut(); 
  }
  
  facebookLogin(): Promise<any> {
    return this.facebook.login(['public_profile', 'email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInAndRetrieveDataWithCredential (facebookCredential)
          .then(data => { 
          });
  
      }).catch((error) => { console.log(error) });
  }
}
