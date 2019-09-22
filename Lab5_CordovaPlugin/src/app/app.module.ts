import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {Geolocation} from "@ionic-native/geolocation/ngx";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";

const firebaseConfig = {
  apiKey: "AIzaSyBCSIy12DpqoJX1JBZsz08g2QgNV30FoQU",
  authDomain: "my-first-project-ase-lab-5.firebaseapp.com",
  databaseURL: "https://my-first-project-ase-lab-5.firebaseio.com",
  projectId: "my-first-project-ase-lab-5",
  storageBucket: "",
  messagingSenderId: "642327932662",
  appId: "1:642327932662:web:b68d0c87c5be8d539786d7"
};

/*const firebaseConfig = {
  apiKey: "AIzaSyD3Rsepm5PONuUFPVK6TxcTZLHnVA2Ic7M",
  authDomain: "aseproject-216520.firebaseapp.com",
  databaseURL: "https://aseproject-216520.firebaseio.com",
  projectId: "aseproject-216520",
  storageBucket: "aseproject-216520.appspot.com",
  messagingSenderId: "591949741909",
  appId: "1:591949741909:web:41be263a13e910ccc279dc"
};*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    AngularFireAuth,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
