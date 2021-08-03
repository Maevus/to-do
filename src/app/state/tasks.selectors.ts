import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ITask } from "../models/task";
import { SELECT_ALL_TASKS} from './../const'


export const selectAllTasks = createSelector(
    (state: AppState) => state.tasks,
    (tasks: Array<ITask>) => tasks
)

export const selectFilterBy = createSelector(
    (state: AppState) => state.filterBy,
    (filter: string) => filter
)

export const selectFilteredTasks = createSelector(
    selectAllTasks,
    selectFilterBy,
    (tasks: Array<ITask>, filter: string) => {
        console.log("filter by selector", filter)
        if (!filter || filter === SELECT_ALL_TASKS) {
            return [...tasks]
        }
        return tasks.filter(task => task.status === filter)
    }
)