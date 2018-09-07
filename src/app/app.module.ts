import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  /*FormsModule表单模块*/
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LocalServiceService } from "./services/local-service.service";
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
