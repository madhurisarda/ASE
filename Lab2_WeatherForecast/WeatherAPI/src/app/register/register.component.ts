import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-food',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @ViewChild('foodItem') foodItem: ElementRef;
  logins = [];
  constructor(private _http: HttpClient, private router: Router) {
  }
  registeration(uname,password) {
    localStorage.setItem("name" , uname);
    localStorage.setItem("password" , password);
    this.logins.push(localStorage.getItem("name") + " was registered.")
    this.router.navigate(['/login']);
  }
}
