import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';
import { Repository } from '../repository';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

// export class ProfileComponent implements OnInit {
  
  
//   private profile: any;
//   private repos: any;


//   constructor(private profileService: ProfileService) {
//     this.profileService.getProfile().subscribe((response: any)=>{
//       console.log(response);
//       this.profile = response;
//     });


//     this.profileService.getRepo().subscribe((data: any)=>{
//       console.log(data);
//       this.repos = data;
//     });
   
//   }

//   ngOnInit(): void {}
  
  

// }

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
    }

    ngOnInit(): void {}
  
  }

