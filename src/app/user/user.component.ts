import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: any;
  name: any;
  email: any;
  password: any;
  users: any[] = [];

  constructor(public service: ApiserviceService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.service.getUserData().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

}
