import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer = {};
  customerForm: FormGroup;
  CustID: string = '';
  CustName: string = '';
  CustEmail: string = '';
  matcher:string = '';
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      'CustID': [null, Validators.required],
      'CustName': [null, Validators.required],
      'CustEmail': [null, Validators.required]
    });
    this.getBook(this.route.snapshot.params['id']);
  }
  getCustomerDetails(id) {
    this.api.getCustomer(id)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
      });
  }
  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.api.updateCustomer(id, form)
      .subscribe(res => {
        this.router.navigate(['/customer-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
  getBook(id) {
    this.api.getCustomer(id).subscribe(data => {
      id = data._id;
      this.customerForm.setValue({
        CustID: data.CustID,
        CustName: data.CustName,
        CustEmail: data.CustEmail
      });
    });
  }
}
