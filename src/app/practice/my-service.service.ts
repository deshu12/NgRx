import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http:HttpClient) { }
  onApiSend():Observable<any>{
return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }
}
