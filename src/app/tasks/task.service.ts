import { Injectable } from '@angular/core';
import { ITask, Task } from '../models/task';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TASK_STATUS_TO_DO } from '../const';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = TASKS;

  constructor() {}

  getAll(): Observable<ITask[]> {
    return of(this.tasks).pipe(delay(100));
  }

  add(name: string): Observable<ITask[]> {
    console.log('taskservice::add ' + name);
  
    let task = new Task();
    task.id = this.getNextId();
    task.name = name;
    task.status = TASK_STATUS_TO_DO;

    this.tasks = Object.assign([], this.tasks);
    this.tasks.push(task);

    return of(this.tasks);
  }

  delete(value: ITask): Observable<ITask[]> {
    console.log('taskservice::delete ' + value?.id + ' ' + value.name);
    this.tasks = this.tasks.filter((task) => {
      return task.id !== value.id;
    });
    console.log(this.tasks);
    return of(this.tasks).pipe(delay(100));
  }

  update(value: ITask, status: string): Observable<ITask[]> {
    this.tasks.filter((task) => {
      if (task.id === value.id) {
        task.status = status;
      }
    });
    return of(this.tasks).pipe(delay(100));
  }

  private getNextId(): number {
    return TASKS.length + 1;
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