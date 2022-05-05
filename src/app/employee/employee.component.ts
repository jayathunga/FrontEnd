import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

export interface Employee {
  id: string;
  name: string;
  address: string;
  mobile: string;

}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  name: any;
  address: any;
  mobile: any;
  employee: Employee[] = [];
  employeeObject: any = {};
  isEdit:boolean=false;
  isSaveBtn:boolean=true;




  constructor(private http: HttpClient, public service: ApiserviceService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  //get employee data
  getEmployeeData() {
    this.service.getEmployeeData().subscribe((data) => {
      this.employee = data;
    });
  }

  //save employee data
  saveEmployeeData() {
    let body = new HttpParams({
      fromObject: {
        "name": this.employeeObject.name,
        "address": this.employeeObject.address,
        "mobile": this.employeeObject.mobile
      }
    });
    this.service.saveEmployeeData(body).subscribe((data) => {
      alert("saved successfully");
      this.getEmployeeData();

    });
  }

  //delete employee data
  deleteEmployee(employeeId: any) {
    this.service.deleteEmployee(employeeId).subscribe((data) => {
      alert("Delete sucessfully!");
      this.getEmployeeData();
    });

  }

  //edit form
  editEmployeeData(employeeId: any) {
    this.service.getEmployeeDataById(employeeId).subscribe((data) => {
      this.employeeObject = data;
      console.log(this.employeeObject + "&&&&");

      this.isEdit=true;
      this.isSaveBtn=false;

    });

  }

  //update employee data
  updateEmployeeData(){
    console.log(this.employeeObject);
    this.service.updateEmployeeData(this.employeeObject.id,this.employeeObject).subscribe((data)=>{
      alert("Update Sucessfully!");
      this.getEmployeeData();

    });


  }

  //clear form data
  clearData(){
    this.isEdit=false;
    this.isSaveBtn=true;
  }






}
