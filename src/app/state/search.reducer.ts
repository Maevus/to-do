import { createReducer, on } from "@ngrx/store";
import * as TaskServiceActions from './tasks.actions';

const initialState: Readonly<string> = '';

export const searchReducer = createReducer(
  initialState,
  on(TaskServiceActions.searchTerm, (state, action): string => {
      console.log("reducer", state, " ", action.searchTerm)
      state = action.searchTerm
      return state
    })
);