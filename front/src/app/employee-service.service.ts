import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseURL: string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.baseURL + '/api/employees')
  }

  getEmployee(id:String): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.baseURL + '/api/employees/'+id)
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.get<Employee[]>(this.baseURL + '/api/employee/add')
  }
}
