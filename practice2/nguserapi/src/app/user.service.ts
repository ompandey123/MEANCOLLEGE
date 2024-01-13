import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getUser():Observable<any>{
    return this.http.get(`${this.apiUrl}/display`);
  }
}
