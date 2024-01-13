import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}/home`);
  }

}
