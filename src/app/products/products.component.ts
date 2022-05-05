import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

export interface Product {
  id: string;
  name: string;
  Address: string;
  price: number;
  description: string;

}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  name: any;
  description: any;
  price: any;
  Address: any;
  products: any[] = [];

  constructor(public service: ApiserviceService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData() {
    this.service.getProductData().subscribe((data) => {
      this.products = data;
      console.log(data + "************");
    });
  }

  saveproductData() {
    let body = new HttpParams({
      fromObject: {
        "name": this.name,
        "description": this.description,
        "price": this.price,
        "Address": this.Address
      }
    });
    this.service.saveProductData(body).subscribe((data) => {
      //this.getProductData();
      alert("saved successfully");
    });
  }

}
