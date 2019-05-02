import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { namespaceHTML } from '@angular/core/src/render3';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  create:boolean=false;
  allocate:boolean=false;
  deallocate:boolean=false;
  successMessage:string=null;
  errorMessage:string=null;
  success:any;
  delete:boolean=false;
  display:boolean=false;

  constructor(private adminservice : AdminService) { }

  ngOnInit() {
  }

  disabling(key){
    if(key == 1){
      if(this.create == true){
        this.successMessage=null
        this.errorMessage=null
        this.create=false
      }
      else{
        this.create=true;
      this.deallocate=false;
      this.allocate=false;
      this.delete=false;
      this.display=false}
    }
    if(key == 2){
      if(this.deallocate == true){
        this.successMessage=null
        this.errorMessage=null
        this.deallocate=false
      }
      else{
      this.deallocate=true;
      this.create=false;
      this.allocate=false;
      this.delete=false;
      this.display=false;}
    }
    if(key == 3){
      if(this.allocate == true){
        this.successMessage=null
        this.errorMessage=null
        this.allocate=false
      }
      else{
        this.allocate=true;
      this.create=false;
      this.deallocate=false;
      this.delete=false;
      this.display=false;}
    }
    if(key == 4){
      if(this.delete == true){
        this.successMessage=null
        this.errorMessage=null
        this.delete=false
      }
      else{
        this.allocate=false;
      this.create=false;
      this.deallocate=false;
      this.delete=true;
      this.display=false}
    }
    if(key == 5){
      if(this.display == true){
        this.successMessage=null
        this.errorMessage=null
        this.display=false
      }
      else{
        this.allocate=false;
      this.create=false;
      this.deallocate=false;
      this.delete=false;
      this.display=true}
    }
  }

  deAllocate(value){
    this.adminservice.deAllocated(value).subscribe(
      response => {
        this.successMessage=response
        this.errorMessage=null
    },
    err => {
      this.errorMessage="no records found"
      this.successMessage=null
    })
  }

  Update(id,user){
    this.adminservice.updated(id,user).subscribe(
      response => {
        this.successMessage=response
        this.errorMessage=null
    },
    err => {
      this.errorMessage="updation of user is unsuccessful"
      this.successMessage=null
    })
  }

  created(id,name){
    this.adminservice.created(id,name).subscribe(
      response => {
        this.successMessage=response
        this.errorMessage=null
    },
    err => {
      this.errorMessage="creation is unsuccessful"
      this.successMessage=null
    })
  }

  Delete(id){
    this.adminservice.deleted(id).subscribe(
      response => {
        this.successMessage=response
        this.errorMessage=null
    },
    err => {
      this.errorMessage="deletion is unsuccessful"
      this.successMessage=null
    })
  }

  
}
