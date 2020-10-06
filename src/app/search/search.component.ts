import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Search } from '../search';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  searchFor(data){
      this.getName.emit(data.value.find);
      console.log(data.value.find)
      data.reset();
  }


constructor() { }

ngOnInit() {
}

}
