import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private profile: any;
  private repos: any;
 
  private username:string;
  private token = '33b3ec335783e556794cb6672dceee70ef8b59e3'

constructor(private http:HttpClient) {
    this.username = 'Ashisoma';
   }
   getProfile(){
     return this.http.get('https:api.github.com/users/' + this.username + '?access_token=' + this.token )
   }

   getRepo(){
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
  }
}
