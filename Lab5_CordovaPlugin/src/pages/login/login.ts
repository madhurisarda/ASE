import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../Models/user";
import {AngularFireAuth} from 'angularfire2/auth';
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseauth: AngularFireAuth) {
  }

  create(user:User){
    try {
        this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function () {
        alert("Created successfully, Now Login");
        user.email="";
        user.password="";
      }).catch(() =>
        {
          alert("invalid email/password should be of 6 characters");
        })
    }
    catch(e){
      console.error(e);
    }
  }

   login(user:User){
    try {
         this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
           console.log(this.firebaseauth.auth.currentUser.uid);
           this.navCtrl.push(HomePage);
         }).catch(()=>{
           alert("Try again. Invalid Credentials");
         })
    }
    catch(e){
      console.error(e);
    }
  }


}
