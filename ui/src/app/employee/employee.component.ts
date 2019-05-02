import { Component, OnInit } from '@angular/core';
import { EmployeeService }  from './employee.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:boolean = false;
  name:boolean = false;
  user:boolean = false;
  successMessage:String=null;
  errorMessage:String=null;
  constructor(private employeeservice : EmployeeService) { }

  ngOnInit() {
  }

  setValue(key){
    if(key == 1){
      this.id=true;
      this.name=false;
      this.user=false;
    }
    if(key == 2){
      this.id=false;
      this.name=true;
      this.user=false;
    }
    if(key == 3){
      this.id=false;
      this.name=false;
      this.user=true;
    }
  }

  get_data(value,key){
    this.employeeservice.getDetails(value,key).subscribe(
      response => {
        this.successMessage=response
        this.errorMessage=null
    },
    err => {
      this.errorMessage="no records found"
      this.successMessage=null
    })
  }
}
