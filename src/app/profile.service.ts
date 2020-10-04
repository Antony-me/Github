import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  username:string;

  constructor(private http: HttpClient) {
    this.username = 'Antony-me';
   }


  getProfile(){
    return this.http.get(`https://api.github.com/users/?api_key=33b3ec335783e556794cb6672dceee70ef8b59e3" + this.username`)
    .map(res => res.json())
  }
}
