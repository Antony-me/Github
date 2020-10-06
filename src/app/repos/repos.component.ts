
import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../profile.service';
import { Repository } from '../repository';
import { User } from '../user';



@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})  

export class ReposComponent implements OnInit {

  repository: Repository;
  searchRepo: string;

  searchRepos(){
    this.searchRepo = "";
    this.getProfileFun();
  }

  constructor( public RepoService: ProfileService ) { }

  ngOnInit() {
    this.RepoService.gitRepos(this.searchRepo)
    
  }
  getProfileFun(){
    this.RepoService.gitRepos(this.searchRepo)
  }
 
}