import { Injectable } from '@angular/core';
import { ITask as ITask } from '../models/task';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = TASKS;

  constructor() {}

  addTask(task: ITask): void {}

  deleteTask(value: ITask): Observable<ITask[]> {
    this.tasks = this.tasks.filter(task => {
      return task.id !== value.id 
    });

    return of(this.tasks).pipe(delay(100));
  }

  getTasks(): Observable<ITask[]> {
    return of(TASKS).pipe(delay(100));
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
