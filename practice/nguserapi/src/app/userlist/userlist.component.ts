import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  users: any[] = []

  constructor(private us: UserService){}

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.us.getUsers().subscribe(
      (data: any)=>{
        this.users = data;
      }, (error)=>{
        console.log('Error fetching the employees', error);
      }
    )
  }
}
