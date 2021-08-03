import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { ITask } from '../models/task';
import { SELECT_ALL_TASKS } from './../const';
import { state } from '@angular/animations';

export const selectAllTasks = createSelector(
  (state: AppState) => state.tasks,
  (tasks: Array<ITask>) => tasks
);

export const selectFilterBy = createSelector(
  (state: AppState) => state.filterBy,
  (filter: string) => filter
);

export const selectSearchTerm = createSelector(
  (state: AppState) => state.searchBy,
  (searchBy: string) => searchBy
);

export const selectFilteredSearchedTasks = createSelector(
  selectAllTasks,
  selectFilterBy,
  selectSearchTerm,
  (tasks: Array<ITask>, filter: string, searchBy: string) => {
    let visibleTasks = [...tasks]
    if (searchBy) {
        console.log("search term detected, searching...")
        visibleTasks = tasks.filter(
          (task) => task.name.toLowerCase() === searchBy.toLowerCase()
        );
      }
    if (!filter || filter === SELECT_ALL_TASKS) {
      return visibleTasks
    } else {
      visibleTasks = visibleTasks.filter((task) => task.status === filter);
    }
    
    return visibleTasks;
  }
);

