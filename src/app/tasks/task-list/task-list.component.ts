import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCompletedTasks as selectCompleteTasks,
  selectAllTasks,
  selectToDoTasks,
} from './../../state/tasks.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() searchTerm: string;

  visibleTasks$: Observable<ITask[]>  
  allTasks$: Observable<ITask[]> = this.store.pipe(select(selectAllTasks));
  completeTasks$: Observable<ITask[]> = this.store.pipe(select(selectCompleteTasks));
  toDoTasks$: Observable<ITask[]> = this.store.pipe(select(selectToDoTasks));

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Task List Page] Load Tasks' });
    this.visibleTasks$ = this.allTasks$
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
    this.filter()
  }

  filter() {
    console.log('filter');
    this.store.pipe(select(selectCompleteTasks));
  }
}
