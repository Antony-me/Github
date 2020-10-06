import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchName:string;
  
  @Output() searchOutput = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}