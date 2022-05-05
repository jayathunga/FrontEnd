import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Customer } from '../customer/customer.component';

export interface Task {
  id: string;
  name: string;
  description: string;
  complete: boolean;
  photo: string;
  customer: Customer;


}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  taskObject: any = {};
  customers: Customer[] = [];

  name:any;
  description:any;
  customer:any;

  constructor(private http: HttpClient, public service: ApiserviceService) { }

  ngOnInit(): void {
    this.getTasksData();
    this.getCustomerData();
  }

  //get tasks data
  getTasksData() {
    this.service.getTasksData().subscribe((data) => {
      this.tasks = data;
    });
  }

  //get customer dropdown data
  getCustomerData() {
    this.service.getCustomerDropDownData().subscribe((data) => {
      this.customers = data;
    });
  }

  //save task data
  saveTaskData() {
    let body = new HttpParams({
      fromObject: {
        "name": this.name.value,
        "description": this.description.value,
        "customer": this.customer.value
      }
    });
    this.service.saveTaskData(body).subscribe((data) => {
      this.getTasksData();
      alert("saved successfully");
    });

  }

  complete(item: any) {
    console.log(item);
    this.taskObject.complete=true;
    
    this.service.completeTaskData(this.taskObject.id,this.taskObject).subscribe((data) => {
      this.getTasksData();
      alert("Updated");
    });
  }

  edit(itemId: any) {
    this.service.getTaskDataById(itemId).subscribe((data) => {
      this.taskObject = data;
      console.log(this.taskObject);
    });
}

deleteTaskData(itemId:any){
  this.service.deleteTaskData(itemId).subscribe((data)=>{
    alert("Delete successfully");
    this.getTasksData();

  });

}


}
