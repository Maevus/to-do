import { createAction, props } from '@ngrx/store';
import { ITask } from './../models/task';

export const loadTasks = createAction('[Task List Page] Load Tasks');
export const loadTasksSuccess = createAction('[Tasks API] Tasks Loaded Success', props<{payload: ITask[]}>());

// export const addTask = createAction('[Task Service] AddTask', props<{task: ITask}>());
// export const deleteTask = createAction('[TaskService] DeleteTask');
