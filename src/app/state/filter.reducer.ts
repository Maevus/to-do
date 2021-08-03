import { createReducer, on } from "@ngrx/store";
import * as TaskServiceActions from './tasks.actions';

const initialState: Readonly<string> = "";

export const filterReducer = createReducer(
  initialState,
  on(TaskServiceActions.updateFilter, (state, action): string => {
      console.log("reducer", state, " ", action.filter)
      state = action.filter
      return state
    }));