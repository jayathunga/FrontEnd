import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  //customer API requests
  getCustomersData(): Observable<any> {
    return this.http.get(environment.baseURL + '/customers');
  }

  saveCustomerData(body: any): Observable<any> {
    return this.http.post(environment.baseURL + '/customer', body);

  }

  deleteCustomerData(customerid: any): Observable<any> {
    return this.http.delete(environment.baseURL + '/customerDelete/' + customerid)

  }

  updateCustomerData(customerid: any, body: any): Observable<any> {
    return this.http.put(environment.baseURL + '/customerUpdate/' + customerid, body);

  }

  getCustomerData(customerid: any): Observable<any> {
    return this.http.get(environment.baseURL + '/customer/' + customerid);

  }

  //Employee API requests
  getEmployeeData(): Observable<any> {
    return this.http.get(environment.baseURL + '/employee/getAll');

  }

  saveEmployeeData(body: any): Observable<any> {
    return this.http.post(environment.baseURL + '/employee/create', body);

  }

  deleteEmployee(employeeId: any): Observable<any> {
    return this.http.delete(environment.baseURL + '/employee/deleteEmployee/' + employeeId);

  }

  getEmployeeDataById(employeeId: any): Observable<any> {
    return this.http.get(environment.baseURL + '/employee/getoneEmployee/' + employeeId);

  }

  updateEmployeeData(employeeId: any, body: any): Observable<any> {
    return this.http.put(environment.baseURL + '/employee/updateEmployee/' + employeeId, body);

  }

  //Task API requests
  getTasksData(): Observable<any> {
    return this.http.get(environment.baseURL + '/task/getAll');
  }

  getCustomerDropDownData(): Observable<any> {
    return this.http.get(environment.baseURL + '/customers');

  }
  saveTaskData(body: any): Observable<any> {
    return this.http.post(environment.baseURL + '/task/create', body);

  }

  completeTaskData(itemId: any, body: any): Observable<any> {
    return this.http.put(environment.baseURL + '/task/update/' + itemId, body);
  }

  getTaskDataById(itemId: any): Observable<any> {
    return this.http.get(environment.baseURL + '/task/getOneById/' + itemId);

  }

  deleteTaskData(itemId: any): Observable<any> {
    return this.http.delete(environment.baseURL + '/task/delete/' + itemId);

  }

  //products API requests
  getProductData(): Observable<any> {
    return this.http.get(environment.subURL + '/products/getAllData');

  }
  saveProductData(body: any): Observable<any> {
    return this.http.post(environment.subURL + '/products/saveData', body);
  }

  getUserData(): Observable<any> {
    return this.http.get(environment.subURL + '/user/getUserData');
  }

}
