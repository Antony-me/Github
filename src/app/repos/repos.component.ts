
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

  repo: Repository;
  constructor( public RepoService: ProfileService ) { }

  repoSearch(searchName){
    this.RepoService.getRepos(searchName).then(
      (results)=>{
        this.repo =this.RepoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    
  }
 
}