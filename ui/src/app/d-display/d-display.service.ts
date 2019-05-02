import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DDisplayService {

  constructor(private http:HttpClient) { }

  displayed(){
    return this.http.get<any>("http://localhost:3000/display");
  }
}
