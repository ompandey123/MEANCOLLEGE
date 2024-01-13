import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private route: ActivatedRoute,private router: Router,private bs: BookService)
  {
    this.angForm = this.fb.group({
      bookname: ['', Validators.required ],
      booktype: ['', Validators.required ],
      author: ['', Validators.required ],
      cost: ['', Validators.required ]
    });
  }
  
  insertBook()
  {
    this.bs.addBook(this.angForm.value.bookname,this.angForm.value.booktype,this.angForm.value.author,parseInt(this.angForm.value.cost));
    this.router.navigate(['book/home']);
  }

}
