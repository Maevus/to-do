import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from './../../store/task.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() searchTerm: string;

  tasks$: Observable<ITask[]> = this.store.select((state) => state.tasks);

  constructor(private store: Store<{ tasks: ITask[] }>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Task List Page] Load Tasks' });
  }

  completeTask(task: ITask): void {
    this.updateTask(task, TASK_STATUS_COMPLETED)
  }

  uncompleteTask(task: ITask): void {
    this.updateTask(task, TASK_STATUS_TO_DO);
  }

  deleteTask(task): void {
    this.store.dispatch({ type: '[Task List Page] Delete Task', task: task });
  }

  private updateTask(task, status): void {
    this.store.dispatch({
      type: '[Task List Page] Update Task',
      task,
      status
    });
  }

  // filter(filterBy) {
  //   let status = this.getStatus(filterBy) 
  //   console.log(status)

  // }


  // search(searchTerm) {
  //   // call selector to filter   tasks$
  // }

  // private getStatus(formValue: string): string {
  //   switch (formValue) {
  //     case 'completed': {
  //       return TASK_STATUS_COMPLETED;
  //     }
  //     case 'to-do': {
  //       return TASK_STATUS_TO_DO;
  //     }
  //     default: {
  //       return null;
  //     }
  //   }
  // }
}
