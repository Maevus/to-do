import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$ 
  unsubscribe$  = new Subject<ITask[]>();
  tasks: ITask[];
  mylist: any[] = [1,2,3]

  constructor(private store: Store<{ tasks: ITask[] }>) {
    this.tasks$ = this.store
      .select((state) => state.tasks)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.tasks = value;
      });
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Task List Page] Load Tasks' });
    console.log(this.tasks$);
    console.log(this.tasks);
  }

  completeTask(task): void {
    this.updateTask(task, TASK_STATUS_COMPLETED);
  }

  uncompleteTask(task): void {
    this.updateTask(task, TASK_STATUS_TO_DO);
  }

  deleteTask(task): void {
    // this.taskService.delete(task).subscribe((tasks) => {
    //   this.tasks = tasks;
    // });
  }

  private updateTask(task: ITask, status: string): void {
    // this.taskService
    //   .update(task, status)
    //   .subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
