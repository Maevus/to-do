import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from '../const';
import * as actions from './../state/tasks.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterBy: string;
  searchTerm: string;

  constructor(private store: Store) {}

  ngOnInit() {}

  filter(filter) {
    this.store.dispatch({type: '[Tasks Home Page] UpdateFilter', filter: filter})
  }

}
