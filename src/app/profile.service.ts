import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  foundUser: User;
  allRepos: Repository;
 

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos = new Repository("","","",new Date);
  }


  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,login: string, html_url:string, location:string,  public_repos:number, followers:number, following:number, avatar_url:string, created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/Antony-me?access_token=33b3ec335783e556794cb6672dceee70ef8b59e3').toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepos(searchName){
    interface Repository{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repository>('https://api.github.com/users/Antony-me/repos?order=created&sort=asc?access_token=33b3ec335783e556794cb6672dceee70ef8b59e3').toPromise().then(
        (results) => {
          this.allRepos = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        });
    });
  }

} 