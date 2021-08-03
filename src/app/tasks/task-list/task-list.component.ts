import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';
import { select, Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import {
  selectFilteredTasks, selectSearchedTasks,
} from './../../state/tasks.selectors';
import { _ROOT_STORE_GUARD } from '@ngrx/store/src/tokens';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  visibleTasks$: Observable<ITask[]> 
  searchedTasks$: Observable<ITask[]> 
  
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Task List Page] Load Tasks' })
    this.visibleTasks$ = this.store.pipe(select(selectFilteredTasks));
    this.searchedTasks$ = this.store.pipe(select(selectSearchedTasks));
  }

  completeTask(task: ITask): void {
    this.updateTask(task, TASK_STATUS_COMPLETED);
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
      status,
    });
  }
}

