import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  deAllocated(value){
    return this.http.put<any>("http://localhost:3000/update/"+value,value);
  }

  updated(id,user){
    return this.http.put<any>("http://localhost:3000/update/"+id+"/"+user,id);
  }

  created(id,name){
    return this.http.put<any>("http://localhost:3000/create/"+id+"/"+name,id);
  }

  deleted(id){
    return this.http.put<any>("http://localhost:3000/delete/"+id,id);
  }
}
