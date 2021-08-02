import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ITask } from "../models/task";

export const selectAllTasks = createSelector(
    (state: AppState) => state.tasks,
    (tasks: Array<ITask>) => tasks
)

export const selectCompletedTasks = createSelector(
    selectAllTasks,
    (tasks: Array<ITask>) => {
        return tasks.filter(task => task.status === "complete")
    }
)

export const selectToDoTasks = createSelector(
    selectAllTasks,
    (tasks: Array<ITask>) => {
        return tasks.filter(task => task.status === "to do")
    }
)