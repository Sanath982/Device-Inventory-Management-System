import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getDetails(value,key):Observable<any> {
      return this.http.get<any>("http://localhost:3000/details/"+value+"/"+key);
    }
  
}
