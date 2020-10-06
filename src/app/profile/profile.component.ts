import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Repository } from '../repository';
import { User } from '../user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  user: User;
  repos: Repository;
  searchName = 'Antony-me'


    constructor(public profileService: ProfileService) {
    }
  
    searchs(searchName) {
      this.profileService.searchUSer(searchName).then(
        (success)=>{
          this.user = this.profileService.users;
          // console.log(this.user);
        },
        (error)=>{
          console.log(error)
        }
      ); 
    this.profileService.getRepos(searchName).then(
      (repos)=>{
        this.repos =this.profileService.allRepos;
        console.log(this.repos);
      },
      (error)=>{
        console.log(error);
      }
    );
   }
    ngOnInit(): void {
      this.searchs('Antony-me')
    }
  
  }

