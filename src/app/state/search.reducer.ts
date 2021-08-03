import { createReducer, on } from "@ngrx/store";
import * as TaskServiceActions from './tasks.actions';

const initialState: Readonly<string> = '';

export const searchReducer = createReducer(
  initialState,
  on(TaskServiceActions.search, (state, action): string => {
      console.log("reducer", state, " ", action.searchBy)
      state = action.searchBy
      return state
    })
);