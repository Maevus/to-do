import { createAction, props } from '@ngrx/store';
import { ITask } from '../models/task';

export const loadTasks = createAction('[Task List Page] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Tasks API] Tasks Loaded Success',
  props<{ payload: ITask[] }>()
);

export const addTask = createAction(
  '[Task List Page] Add Task',
  props<{ name: string }>()
); // can remove props here?
export const addTaskSuccess = createAction(
  '[Tasks API] Add Task Success',
  props<{ payload: ITask }>()
);

export const deleteTask = createAction(
  '[Task List Page] Delete Task',
  props<{ task: ITask }>()
);
export const deleteTaskSuccess = createAction(
  '[Tasks API] Delete Task Success',
  props<{ payload: number }>()
);

export const updateTask = createAction(
  '[Task List Page] Update Task',
  props<{ task: ITask; status: string }>()
);
export const updateTaskSuccess = createAction(
  '[Tasks API] Update Task Success',
  props<{ payload: {task: ITask}}>()
);



export const updateFilter = createAction(
  '[Tasks Home Page] UpdateFilter',
  props<{ filter: string}>()
)
export const search = createAction(
  '[Search Task Page] Search Tasks',
  props<{ searchBy: string}>()
)