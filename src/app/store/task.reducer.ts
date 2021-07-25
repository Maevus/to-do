import { ITask } from '../models/task';
import { createReducer, on } from '@ngrx/store';
import * as TaskServiceActions from './tasks.actions';
import { TASK_STATUS_COMPLETED, TASK_STATUS_TO_DO } from '../const';

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

    on(TaskServiceActions.deleteTaskSuccess, (state, action) => (
      // state less returned task where id is equal to returned value.
      state.filter(task => task.id !== action.payload)
    )),

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
      (state) => ([ // just replacing state with state here. 
        ...state
      ])
    ),

    on(TaskServiceActions.updateTaskSuccess, (state, action) => ([
      ...action.payload,
    ])),
)
    

  export function reducer(state: any, action: any) {
    return taskReducer(state, action);
  }