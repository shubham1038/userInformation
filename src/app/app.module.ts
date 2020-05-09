import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListChildComponent } from './student-list-child/student-list-child.component';
import { StudentInformationComponent } from './student-list/student-information/student-information.component';
import { AppInterceptorComponent } from './interceptor/app-interceptor/app-interceptor.component';
import { AppInterceptorService } from './interceptor/app-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { StudentMiscellaneousComponent } from './miscellaneous/student-miscellaneous/student-miscellaneous.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentListComponent,
    StudentListChildComponent,
    routingComponents,
    StudentInformationComponent,
    AppInterceptorComponent,
    StudentMiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
