import { ITask } from '../models/task';
import { createReducer, on } from '@ngrx/store';
import * as TaskServiceActions from './tasks.actions';

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
    ])),

    on(
      TaskServiceActions.deleteTask,
      (state) => ([
        ...state
      ])
    ),

    on(TaskServiceActions.deleteTaskSuccess, (state, action) => ([
      ...action.payload,
    ])),

    on(
      TaskServiceActions.addTask,
      (state) => ([
        ...state
      ])
    ),

    on(TaskServiceActions.addTaskSuccess, (state, action) => ([
      ...action.payload,
    ])),

    on(
      TaskServiceActions.updateTask,
      (state) => ([
        ...state
      ])
    ),

    on(TaskServiceActions.updateTaskSuccess, (state, action) => ([
      ...action.payload,
    ])),
  );

  export function reducer(state: any, action: any) {
    return taskReducer(state, action);
  }