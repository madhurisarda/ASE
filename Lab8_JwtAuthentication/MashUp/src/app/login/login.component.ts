import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'JWTAuthentication';
  username: any;
  password: any;
  ngOnInit() {
  }
  constructor(private http: HttpClient, private router: Router) {}
  login() {
    let user = {
      username : this.username,
      password : this.password
    };
    this.http.post('http://localhost:4200/api/login', user ).subscribe( data => {
      localStorage.setItem('authorization', data.toString());
      this.router.navigate(['/home']);
    });
  }
}
