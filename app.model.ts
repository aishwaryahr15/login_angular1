import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProjectComponent]
})
export class AppModule { }
