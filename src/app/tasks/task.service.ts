import { Injectable } from '@angular/core';
import { ITask, Task } from '../models/task';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from '../const';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = TASKS;

  constructor() {}

  getTasks(): Observable<ITask[]> {
    return of(TASKS).pipe(delay(100));
  }

  addTask(taskName: string): void {
    let task = new Task();
    task.name = taskName;
    task.status = TASK_STATUS_TO_DO;
    task.id = this.getNextId();
    this.tasks.push(task);
    console.log(task);
  }

  getNextId(): number {
    return TASKS.length + 1;
  }

  deleteTask(value: ITask): Observable<ITask[]> {
    this.tasks = this.tasks.filter((task) => {
      return task.id !== value.id;
    });

    return of(this.tasks).pipe(delay(100));
  }

  updateTask(value: ITask, status: string): Observable<ITask[]> {
    this.tasks.filter((task) => {
      if (task.id === value.id) {
        task.status = status;
      }
    });
    return of(this.tasks).pipe(delay(100));
  }
}

const TASKS: ITask[] = [
  {
    id: 1,
    name: 'things to do',
    status: 'to do',
  },
  {
    id: 2,
    name: 'more things to do',
    status: 'complete',
  },
  {
    id: 3,
    name: 'morer things to do',
    status: 'to do',
  },
];
