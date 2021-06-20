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

    let task: Task = this.makeTask(name);

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

  update(id: number, status: string): Observable<ITask[]> {
    console.log('taskservice::update task ' + id + ' to ' + status);

    this.tasks = this.clone(this.tasks);
    this.tasks.filter((task) => {
      if (task.id === id) {
        task.status = status;
      }
    });

    return of(this.tasks).pipe(delay(100));
  }

  private clone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  private getNextId(): number {
    return TASKS.length + 1;
  }

  private makeTask(name: string): Task {
    let task = new Task();
    task.id = this.getNextId();
    task.name = name;
    task.status = TASK_STATUS_TO_DO;
    return task;

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
