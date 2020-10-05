import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  
  private profile: any;
  private repos: any;


  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe((response: any)=>{
      console.log(response);
      this.profile = response;
    });

    
    this.profileService.getRepo().subscribe((data: any)=>{
      console.log(data);
      this.repos = data;
    });
   
  }

  ngOnInit(): void {}
  
  

}
