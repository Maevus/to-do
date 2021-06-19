import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: ITask[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  completeTask(task): void {
    this.updateTask(task, TASK_STATUS_COMPLETED);
  }

  uncompleteTask(task): void {
    this.updateTask(task, TASK_STATUS_TO_DO);
  }

  deleteTask(task): void {
    this.taskService.deleteTask(task).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  private updateTask(task: ITask, status: string): void {
    this.taskService
      .updateTask(task, status)
      .subscribe((tasks) => (this.tasks = tasks));
  }
}
