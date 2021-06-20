import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { TaskService } from './../tasks/task.service';
import * as taskActions from './../actions/tasks.actions';


@Injectable()
export class TaskEffects {
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Task List Page] Load Tasks'),
      mergeMap(() =>
        this.taskService.getAll().pipe(
          map((tasks) => ({
            type: '[Tasks API] Tasks Loaded Success',
            payload: tasks,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.deleteTask),
      mergeMap(action =>
        this.taskService.delete(action.task).pipe(
          map((tasks) => ({
            type: '[Tasks API] Delete Task Success',
            payload: tasks,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addTask$ = createEffect(() =>
  this.actions$.pipe(
    ofType(taskActions.addTask),
    mergeMap(action =>
      this.taskService.add(action.name).pipe(
        map((tasks) => ({
          type: '[Tasks API] Add Task Success',
          payload: tasks,
        })),
        catchError(() => EMPTY)
      )
    )
  )
);

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
