import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';
import { environment } from '../environments/environment.prod'



@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  
  allRepos: Repository;
  users: User;
  searchRepo: any;
 

  constructor(private http: HttpClient) {
    this.users = new User("","","",0,0,0,"",new Date);
    this.allRepos = new Repository("","","",new Date);
  }


  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      name:string;
      login: string,
      html_url:string,
      location:string,  
      public_repos:number,
      followers:number, 
      following:number, 
      avatar_url:string,
      created_at:Date;
    }

    const promise = new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/Antony-me?access_token=33b3ec335783e556794cb6672dceee70ef8b59e3').toPromise().then(
        (getResponse) => {
          this.users.name = getResponse.name;
          this.users.html_url = getResponse.html_url;
          this.users.login = getResponse.login;
          this.users.avatar_url = getResponse.avatar_url;
          this.users.public_repos = getResponse.public_repos;
          this.users.created_at = getResponse.created_at;
          this.users.followers = getResponse.followers;
          this.users.following = getResponse.following;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
    return promise;
  }

  getRepos(searchName){
    interface Repository{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    const myPromise = new Promise((resolve,reject)=>{
      this.http.get<Repository>('https://api.github.com/users/' + searchName + '/repos?order=created&sort=asc?access_token=33b3ec335783e556794cb6672dceee70ef8b59e3').toPromise().then(
        (getRepoResponse) => {
          this.allRepos = getRepoResponse;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        });
    });
    return myPromise;
    
  }

  gitRepos(searchName) {
    interface ApiResponse {
        items: any;
    }

    const promise = new Promise((resolve, reject) => {
        this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + ' &per_page=10?token=33b3ec335783e556794cb6672dceee70ef8b59e3').toPromise().then(getRepoResponse => {
            this.searchRepo = getRepoResponse.items;

            resolve();
        }, error => {
            this.searchRepo = 'error';
            reject(error);
        });
    });
    return promise;
}

} 