import { ITask } from '../models/task';
import { Action, createReducer, on } from '@ngrx/store';
import * as TaskServiceActions from './../actions/tasks.actions';

// export interface IState {
//     tasks: ITask[]
// }

const initialState: ITask[] = [];

const taskReducer = createReducer<ITask[]>(
    initialState,
    on(
        TaskServiceActions.loadTasks,
      (state): ITask[] => ([
        ...state
      ])
    ),
  
    on(TaskServiceActions.loadTasksSuccess, (state, action) => ([
      ...state,
      ...action.payload,
    ]))
  );
  export function reducer(state: any, action: any) {
    return taskReducer(state, action);
  }


// export function cloneDeep(val) { 
//    return JSON.parse(JSON.stringify(val));
// }

