import { ITask } from '../models/task';
import { Action, createReducer, on } from '@ngrx/store';
import * as TaskServiceActions from './../actions/tasks.actions';

export const TASKS: ITask[] = [
    {
      id: 1,
      name: 'things to do',
      status: 'to do',
    },
    {
      id: 2,
      name: 'more things to do',
      status: 'complete',
    },
    {
      id: 3,
      name: 'morer things to do',
      status: 'to do',
    },
  ];

// export interface IState {
//     tasks: ITask[]
// }

const initialState: ITask[] = TASKS;

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

