import { Injectable } from '@angular/core';
import { Task as ITask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  addTask(task: ITask): void {}

  deleteTask(): ITask[] {
    return null;
  }

  getTasks(): ITask[] {
    return TASKS;
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
