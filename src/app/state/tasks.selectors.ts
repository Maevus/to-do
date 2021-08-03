import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ITask } from "../models/task";
import { SELECT_ALL_TASKS} from './../const'
import { state } from "@angular/animations";


export const selectAllTasks = createSelector(
    (state: AppState) => state.tasks,
    (tasks: Array<ITask>) => tasks
)

export const selectFilterBy = createSelector(
    (state: AppState) => state.filterBy,
    (filter: string) => filter
)

export const selectSearchTerm = createSelector(
    (state: AppState) => state.searchBy,
    (searchBy: string) => searchBy
)

export const selectFilteredTasks = createSelector(
    selectAllTasks,
    selectFilterBy,
    (tasks: Array<ITask>, filter: string) => {
        if (!filter || filter === SELECT_ALL_TASKS) {
            return [...tasks]
        }
        return tasks.filter(task => task.status === filter)
    }
)

export const selectSearchedTasks = createSelector(
    selectAllTasks,
    selectSearchTerm,
    (tasks: Array<ITask>, searchBy: string) => {
        if (searchBy) {
            console.log("search by term selecto", searchBy)
            return tasks.filter(task => task.name.toLowerCase() === searchBy.toLowerCase())
        }
    }
)