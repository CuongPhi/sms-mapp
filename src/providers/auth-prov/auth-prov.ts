import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

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

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvProvider Provider');
  }
  signUp(email:string, password:string):Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email, password);

  }
  logIn(email:string, password:string):Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
}
