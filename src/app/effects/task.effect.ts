import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TaskService } from './../tasks/task.service';

@Injectable()
export class TaskEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType('[Task List Page] Load Tasks'),
    mergeMap(() => this.taskService.getAll()
      .pipe(
        map(tasks => ({ type: '[Tasks API] Tasks Loaded Success', payload: tasks })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}