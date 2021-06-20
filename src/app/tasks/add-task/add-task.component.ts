import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from './../../models/task';
import { TASK_STATUS_TO_DO } from 'src/app/const';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskName

  constructor(private store: Store) {}

  ngOnInit(): void {}

  addTask(formValue): void {
    this.store.dispatch({type: '[Task List Page] AddTask', name: formValue.taskName});
  }
}
