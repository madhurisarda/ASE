import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  books: any;
  displayedColumns = ['CustID', 'CustName', 'CustEmail'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getCustomers()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getCustomers();
  }

  disconnect() {

  }
}
