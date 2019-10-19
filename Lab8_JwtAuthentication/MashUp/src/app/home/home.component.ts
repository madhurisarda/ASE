import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserInfo: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getDetails() {
    const token = localStorage.getItem('authorization');
    const headers = new HttpHeaders().set('authorization', token);
    this.http.get('http://localhost:4200/api/getDetails', {headers} ).subscribe( data => {
      this.UserInfo = data;
      console.log(data);
    });
  }
}
