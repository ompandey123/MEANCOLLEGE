import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get(`${this.apiUrl}/display`);
  }
}
