import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit{

  employees: any[] = [];
  search : any='';

  constructor(private es: EmployeeService){}

  ngOnInit(){
    this.getEmployee();
  }

  getEmployee(){
    this.es.getEmployees().subscribe(
      (data)=>{
        this.employees = data;
      }, (error)=>{
        console.log(error);
      }
    )
  }

  onSubmit(){
    this.search;
  }

}
