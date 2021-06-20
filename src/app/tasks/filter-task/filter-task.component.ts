import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { TASK_STATUS_TO_DO, TASK_STATUS_COMPLETED } from '../../const';

import * as selectors from './../../store/task.reducer';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css'],
})
export class FilterTaskComponent {
  @Output() filterBy;

  constructor() {}

  filter(formValue) {
    let status = this.getStatus(formValue);
    this.filterBy = status;
    console.log(this.filterBy);
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
        return null;
      }
    }
  }
}
