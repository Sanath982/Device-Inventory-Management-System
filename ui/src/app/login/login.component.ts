import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:String="";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  check(id,pwd){
    console.log(id);
    
    if(id == 'admin' && pwd == 'admin@123'){
      this.router.navigate(['/admin'])
      this.errorMessage=""
    }
    else{
      this.errorMessage="invalid credentials"
      setTimeout(() => {
        this.router.navigate(['/login'])
      }, 10000000)
    }
    }
  }

