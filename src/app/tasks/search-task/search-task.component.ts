import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  searchTerm: string;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  search(searchTerm) {
    console.log(searchTerm)
    this.store.dispatch({type:'[Search Task Page] Search Tasks', searchBy: searchTerm })
  }
}
