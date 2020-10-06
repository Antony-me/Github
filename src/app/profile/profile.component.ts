import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';
import { Repository } from '../repository';
import { User } from '../user';
import { ReposComponent } from '../repos/repos.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {


  user: User;
  repo: Repository;


    constructor(public profileService: ProfileService) {
    }
  
    searchs(searchName) {
      this.profileService.searchUSer(searchName).then(
        (success)=>{
          this.user = this.profileService.foundUser;
        },
        (error)=>{
          console.log(error)
        }
      );
    
    this.profileService.getRepos(searchName).then(
      (results)=>{
        this.repo =this.profileService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
   }
    ngOnInit(): void {
      this.searchs('Antony-me');
    }
  
  }

