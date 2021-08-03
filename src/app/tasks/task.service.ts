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

  // Called by effects
  add(name: string): Observable<ITask> {
    console.log('taskservice::add ' + name);

    let task: Task = this.makeTask(name);

    this.tasks = Object.assign([], this.tasks);
    this.tasks.push(task);

    return of(task);
  }

  // Called by effects
  delete(value: ITask): Observable<number> {
    console.log('taskservice::delete ' + value?.id + ' ' + value.name);

    this.tasks = this.tasks.filter((task) => {
      return task.id !== value.id;
    });
    console.log(this.tasks);
    return of(value.id).pipe(delay(100));
  }

  // Called by effects
  update(task: ITask, status: string): Observable<Object> {
    console.log('taskservice::update task ' + task.id + ' to ' + status)
 
    let updatedTask = this.makeTask(task.name, task.id, status)
    this.tasks.map(task => {
      if (task.id === updatedTask.id) {
        task = updatedTask 
      }
    })

    // remove status.
    return of( {task: updatedTask}).pipe(delay(100));

  }


  private getNextId(): number {
    return TASKS.length + 1;
  }

  private makeTask(name: string, id?: number, status?: string): Task {
    let task = new Task();
    task.id = id ? id : this.getNextId();
    task.name = name;
    task.status = status ? status : TASK_STATUS_TO_DO;
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
