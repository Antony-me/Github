
import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
import { Repository } from '../repository';




@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})  

export class ReposComponent implements OnInit {

  repository: Repository;
  allRepo: string;

  searchRepos(){
    this.allRepo = "";
    this.getProfileFun();
  }

  constructor( public RepoService: ProfileService ) { }

  ngOnInit() {
    this.RepoService.getRepos(this.allRepo)
    
  }
  getProfileFun(){
    this.RepoService.getRepos(this.allRepo)
    // console.log(this.allRepo);
    
  }
 
}