import {Component, OnInit} from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  locationList: Observable<any[]>;
  locations: any;
  data = { title:'', description:'', date:'', time:'' };

  constructor(public navCtrl: NavController,
    public firebaseAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public platform: Platform,
    public alertCtrl: AlertController) {
    this.locationList = db.list( this.firebaseAuth.auth.currentUser.uid).valueChanges();
    this.locationList.subscribe(locationList => {
      this.locations = locationList;
      console.log(this.locations);
      });

  }


  checkIn() {
    const itemRef = this.db.list(this.firebaseAuth.auth.currentUser.uid);
    navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });

    function onSuccess(position) {
      itemRef.push({ 'Latitude': position.coords.latitude, 'Longitude': position.coords.longitude, 'Checked In Time': position.timestamp});
    };

    function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
    }
  }

}

