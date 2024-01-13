import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:8000/book'
  constructor(private http: HttpClient) { }

  addBook(bookname: string, booktype: string, author: string, cost: number)
  {
    const obj = {
      bookname: bookname,
      booktype: booktype,
      author: author,
      cost: cost
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj).subscribe(res => console.log('Done'));
  }

  getBooks() :Observable<Book[]> {    
    return this.http.get<Book[]>(`${this.url}/home`);
  }

}
