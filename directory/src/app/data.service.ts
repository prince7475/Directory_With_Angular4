import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { 
  }
      fetchData(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
      }
}
