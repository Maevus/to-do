import { ITask } from '../models/task';
import { createReducer, on } from '@ngrx/store';
import * as TaskServiceActions from './tasks.actions';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from '../const';
import { identifierModuleUrl } from '@angular/compiler';

const initialState: ReadonlyArray<ITask> = [];

export const tasksReducer = createReducer(
  initialState,
  on(TaskServiceActions.loadTasks, (state): ITask[] => [...state]),

  on(TaskServiceActions.loadTasksSuccess, (state, action) => [
    ...state,
    ...action.payload,
  ]),

  on(TaskServiceActions.deleteTask, (state) => [...state]),

  on(TaskServiceActions.deleteTaskSuccess, (state, action) =>
    // state less returned task where id is equal to returned value.
    state.filter((task) => task.id !== action.payload)
  ),

  on(TaskServiceActions.addTask, (state) => [...state]),

  on(TaskServiceActions.addTaskSuccess, (state, action) => [
    ...state,
    action.payload,
  ]),

  on(TaskServiceActions.updateTask, (state) => [...state]),

  on(TaskServiceActions.updateTaskSuccess, (state, action) => {
    const updatedState = state.map((task) =>
      action.payload.task.id === task.id ? action.payload.task : task
    );
    return [...updatedState];
  })
);