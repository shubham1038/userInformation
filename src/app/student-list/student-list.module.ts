import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { StudentListRoutingModule, studentRoutingComponents } from './student-list-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MiscellaneousChild3Component } from './miscellaneous/miscellaneous-child3/miscellaneous-child3.component';
import { MiscellaneousChild4Component } from './miscellaneous/miscellaneous-child4/miscellaneous-child4.component';

@NgModule({
  declarations: [
    studentRoutingComponents,
    MiscellaneousChild3Component,
    MiscellaneousChild4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentListRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule

  ]
})
export class StudentListModule { }
