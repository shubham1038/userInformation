import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentDetailsComponent } from './student-list/student-details/student-details.component';
import { StudentInformationComponent } from './student-list/student-information/student-information.component';
import { AppInterceptorComponent } from './interceptor/app-interceptor/app-interceptor.component';
import { StudentMiscellaneousComponent } from './miscellaneous/student-miscellaneous/student-miscellaneous.component';


const routes: Routes = [
  {path:'' , redirectTo:'view-student', pathMatch:'full'},
  {path:'view-student', component: StudentListComponent  },
  {path:'add-student', component: AddStudentComponent},
  {path: 'student-details', component: StudentDetailsComponent},
  {path: 'student-details/:id' , component: StudentInformationComponent},
  {path:'interceptor', component: AppInterceptorComponent},
  {path:'student-miscellaneous', component: StudentMiscellaneousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[
  StudentDetailsComponent,
  StudentInformationComponent,
  AppInterceptorComponent
]  
