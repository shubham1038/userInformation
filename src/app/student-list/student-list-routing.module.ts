import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentInformationComponent } from './student-information/student-information.component';
import { StudentMiscellaneousComponent } from './miscellaneous/student-miscellaneous.component';
import { MiscellaneousChild1Component } from './miscellaneous/miscellaneous-child1/miscellaneous-child1.component';
import { MiscellaneousChild2Component } from './miscellaneous/miscellaneous-child2/miscellaneous-child2.component';
import { StudentSummaryComponent } from './student-summary/student-summary.component';


const routes: Routes = [
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'student-details/:id', component: StudentInformationComponent },
  { path: 'student-summary', component: StudentSummaryComponent },
  { path: 'student-miscellaneous', component: StudentMiscellaneousComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentListRoutingModule { }

export const studentRoutingComponents = [
  StudentDetailsComponent,
  StudentInformationComponent,
  StudentSummaryComponent,
  StudentMiscellaneousComponent,
  MiscellaneousChild1Component,
  MiscellaneousChild2Component
]
