import { createAction, props } from '@ngrx/store';
import { ITask } from './../models/task';

export const loadTasks = createAction('[Task List Page] Load Tasks');
export const loadTasksSuccess = createAction('[Tasks API] Tasks Loaded Success', props<{payload: ITask[]}>());

export const addTask = createAction('[Task List Page] AddTask', props<{name: string}>());
export const addTaskSuccess = createAction('[Tasks API] Add Task Success', props<{payload: ITask[]}>());

export const deleteTask = createAction('[Task List Page] DeleteTask', props<{task: ITask}>());
export const deleteTaskSuccess = createAction('[Tasks API] Delete Task Success', props<{payload: ITask[]}>());