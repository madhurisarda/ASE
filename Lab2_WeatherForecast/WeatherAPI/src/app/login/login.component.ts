import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-food',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('foodItem') foodItem: ElementRef;
  logins = [];
  constructor(private _http: HttpClient, private router: Router) {
  }
     login(uname,password) {
       var name = localStorage.getItem("name");
       var pass = localStorage.getItem("password");
     //  console.log("username: " + entry.name + "password: " + entry.password);
       if(uname == name && password == pass) {
         alert('You have successfully logged in.');
         this.logins.push(localStorage.getItem("name") + " was logged in.")
         this.router.navigate(['/weather']);
       }
       else{
         //this.router.navigate(['/weather']);
         alert("Invalid password");
       }

    }
}
