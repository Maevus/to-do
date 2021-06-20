import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskService } from './tasks/task.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { FilterTaskComponent } from './tasks/filter-task/filter-task.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchTaskComponent } from './tasks/search-task/search-task.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TaskEffects } from './effects/task.effect'
import * as fromTask from './reducers/task.reducer';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //NgRx
    StoreModule.forRoot({tasks: fromTask.reducer}),
    EffectsModule.forRoot([TaskEffects]),
    //Material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    FilterTaskComponent,
    HomeComponent,
    SearchTaskComponent,

  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
