import { ITask } from "../models/task";

export interface AppState {
    tasks: ReadonlyArray<ITask>,
    filterBy: Readonly<string>,
    searchBy: Readonly<string>
}