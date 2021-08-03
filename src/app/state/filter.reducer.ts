import { createReducer, on } from "@ngrx/store";
import * as TaskServiceActions from './tasks.actions';
import {SELECT_ALL_TASKS} from './../const'

const initialState: Readonly<string> = SELECT_ALL_TASKS;

export const filterReducer = createReducer(
  initialState,
  on(TaskServiceActions.updateFilter, (state, action): string => {
      state = action.filter
      return state
    })
  );