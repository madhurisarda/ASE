import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-food',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  @ViewChild('confirmpassword') confirmpassword: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('uname') uname: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  logins = [];
  constructor(private _http: HttpClient, private router: Router) {
  }
  register() {
    if(this.name.nativeElement.value.length <= 0 || this.uname.nativeElement.value.length <= 0 || this.email.nativeElement.value.length <= 0
      || this.password.nativeElement.value.length <= 0 || this.confirmpassword.nativeElement.value.length <= 0) {
      alert("Please enter all the fields");
    }
    else {
      if (this.password.nativeElement.value != this.confirmpassword.nativeElement.value) {
        alert("Password doesn't match");
      } else {
        localStorage.setItem("name", this.uname.nativeElement.value);
        localStorage.setItem("password", this.password.nativeElement.value);
        this.logins.push(localStorage.getItem("name") + " was registered.")
        this.router.navigate(['/login']);
      }
    }
  }
}
