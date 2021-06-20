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
    let status = this.getStatus(formValue);
    console.log(status)
    this.store.dispatch({type: '[Filter Task Page] Filter Tasks', status: status })
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
