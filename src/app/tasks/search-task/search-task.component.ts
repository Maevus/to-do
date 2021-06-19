import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  searchTerm: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  searchTasks(searchTerm) {
    console.log(searchTerm);
  }

}
