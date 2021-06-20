import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import  * as taskActions from '../../actions/tasks.actions' 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<ITask[]> =  this.store.select((state) => state.tasks)

  constructor(private store: Store<{ tasks: ITask[] }>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: '[Task List Page] Load Tasks' });
  }

  completeTask(task): void {
    this.updateTask(task, TASK_STATUS_COMPLETED);
  }

  uncompleteTask(task): void {
    this.updateTask(task, TASK_STATUS_TO_DO);
  }

  deleteTask(task): void {
    console.log("clicked")
    this.store.dispatch({type: '[Task List Page] DeleteTask', task: task})
  }
  
  private updateTask(task: ITask, status: string): void {
    // this.taskService
    //   .update(task, status)
    //   .subscribe((tasks) => (this.tasks = tasks));
  }


}
