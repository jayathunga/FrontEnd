import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

export interface Customer {
  id: string;
  name: string;
  address: string;
  email: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  name: any;
  address: any;
  email: any;
  isEditDataAvailable: boolean = false;
  saveBtn: boolean = true;

  customers: Customer[] = [];
  customerObject: any = {};

  constructor(public service: ApiserviceService) { }

  ngOnInit(): void {
    this.getCustomersData();


  }

  //get all customers data
  getCustomersData() {
    this.service.getCustomersData().subscribe((data) => {
      this.customers = data;
      console.log(this.customers);
    });
  }

  //create new customer data
  saveCustomerData() {
    let body = new HttpParams({
      fromObject: {
        "name": this.customerObject.name,
        "address": this.customerObject.address,
        "email": this.customerObject.email
      }
    });
    this.service.saveCustomerData(body).subscribe((data) => {
      alert("Saved successfully!");
      this.getCustomersData();

    });
  }

  //delete customer data
  deleteCustomerData(customerid: any) {
    this.service.deleteCustomerData(customerid).subscribe((data) => {
      alert("Delete successfully!");
      this.getCustomersData();

    });
  }

  //update customer data
  updateCustomerData() {
    this.service.updateCustomerData(this.customerObject.id, this.customerObject).subscribe((data) => {
      alert("Updated successfully!");
      this.getCustomersData();

    });
  }

  //edit button click
  editCustomer(item: any) {
    console.log(item);
    this.service.getCustomerData(item.id).subscribe((data) => {
      this.customerObject = data;

    });
    this.isEditDataAvailable = true;
    this.saveBtn = false;
  }

  //clear form data
  clear() {
    this.saveBtn = true;
    this.isEditDataAvailable = false;
  }

}
