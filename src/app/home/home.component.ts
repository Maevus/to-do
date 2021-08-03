import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { SELECT_ALL_TASKS, TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from '../const';
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

  filter(formValue) {
    let filter = this.getStatus(formValue)
    this.store.dispatch({type: '[Tasks Home Page] UpdateFilter', filter: filter})
  }

  private getStatus(formValue: string): string {
    switch (formValue) {
      case 'completed': {
        return TASK_STATUS_COMPLETED;
      }
      case 'to-do': {
        return TASK_STATUS_TO_DO;
      }
      default: {
        return SELECT_ALL_TASKS;
      }
    }
  }

}
