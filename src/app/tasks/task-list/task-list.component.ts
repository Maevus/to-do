import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from './../../const';
import { select, Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import {
  selectFilteredTasks,
} from './../../state/tasks.selectors';
import { _ROOT_STORE_GUARD } from '@ngrx/store/src/tokens';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  searchTerm: string;
  @Input() filterBy: string;

  visibleTasks$: Observable<ITask[]> 
  
  allTasks$: Observable<ITask[]> 
  completeTasks$: Observable<ITask[]> 
  toDoTasks$: Observable<ITask[]>

  constructor(private store: Store<any>) {

    
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Task List Page] Load Tasks' })
    this.visibleTasks$ = this.store.pipe(select(selectFilteredTasks));
  }

  completeTask(task: ITask): void {
    this.updateTask(task, TASK_STATUS_COMPLETED);
  }

  uncompleteTask(task: ITask): void {
    this.updateTask(task, TASK_STATUS_TO_DO);
  }

  deleteTask(task): void {
    this.store.dispatch({ type: '[Task List Page] Delete Task', task: task });
  }

  private updateTask(task, status): void {
    this.store.dispatch({
      type: '[Task List Page] Update Task',
      task,
      status,
    });
  }

  ngOnChanges() {
    console.log('ngOnChg:: ', this.filterBy);
    this.visibleTasks$ = this.store.pipe(select(selectFilteredTasks));
    // this.setVisibleTasksBasedOnFilter(this.filterBy)
  }

  filter(formValue) {
    this.setVisibleTasksBasedOnFilter(formValue);
    console.log(formValue);
  }

  private setVisibleTasksBasedOnFilter(filter: string): void {
    console.log("filtering..")
    switch (filter) {
      case 'completed': {
        // show completed tasks $
        this.visibleTasks$ = this.completeTasks$
      }
      case 'to-do': {
        // show todo tasks $
        this.visibleTasks$ = this.toDoTasks$

      }
      default: {
        // show all tasks $
        this.visibleTasks$ = this.allTasks$

      }
    }
  }
}

//   ngOnChanges() {
//     // activated whenever a component gets a new value
//     if (this.sessions) {
//         this.filterSessions(this.filterBy);
//         this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
//     }
// }

// // very efficient code, nothing changes unless theres an action.
// filterSessions(filter: string) {
//     if (filter === 'all') {
//         this.visibleSessions = this.sessions.slice(0) // creates a complete duplicate of array with all the same elements.
//     } else {
//         this.visibleSessions = this.sessions.filter(session => {
//             return session.level.toLocaleLowerCase() === filter;
//         })
//     }
// }
