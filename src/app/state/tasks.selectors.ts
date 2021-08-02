import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ITask } from "../models/task";

export const selectTasks = createSelector(
    (state: AppState) => state.tasks,
    (tasks: Array<ITask>) => tasks
)

export const selectCompletedTasks = createSelector(
    selectTasks,
    (tasks: Array<ITask>) => {
        return tasks.filter(task => task.status === "complete")
    }
)