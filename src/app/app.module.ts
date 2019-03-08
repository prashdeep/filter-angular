import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FilterUserPipe } from './filter-user.pipe';
import { ReactiveFormComponent } from 'src/app/reactive-form/reactive-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IfelseComponent } from './ifelse/ifelse.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FilterUserPipe,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    IfelseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
