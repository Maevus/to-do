import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TASK_STATUS_TO_DO, TASK_STATUS_COMPLETED } from '../../const';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css'],
})
export class FilterTaskComponent implements OnInit {


  constructor(private store: Store) {}

  ngOnInit(): void {}

  filter(formValue) {
    // let status = this.getStatus(formValue);
     console.log(formValue)
    // this.store.dispatch({type: '[Filter Task Page] Filter Tasks', status: status })
    switch (formValue) {
      case "completed": {
        this.store.dispatch({type: '[Filter Task Page] Show Completed Tasks'})
      }
      case "to-do" : {
        this.store.dispatch({type: '[Filter Task Page] Show To Do Tasks'})
      }
      default: {
        this.store.dispatch({type: '[Filter Page] Show All Tasks'})
      }
    } 
  }

  private getStatus(formValue: string): string {
    switch (formValue) {
      case "completed": {
        return TASK_STATUS_COMPLETED;
      }
      case "to-do" : {
        return TASK_STATUS_TO_DO;
      }
      default: {
        return null
      }
    } 
  }

}
