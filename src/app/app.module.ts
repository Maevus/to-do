import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskService } from './tasks/task.service';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { FilterTaskComponent } from './tasks/filter-task/filter-task.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //Material
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    FilterTaskComponent,
    HomeComponent
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
