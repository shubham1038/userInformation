import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from '../../service/student.service';
import { Student } from '../../model/student';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public studentList: any;
  public userList: any;
  public selectedId;
  constructor(private router: Router,
            private studentSetvice : StudentService,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentSetvice.getUserList().subscribe(
      data => {
        this.userList = data;
      }
    )

    /*this.studentSetvice.getStudentList().subscribe(data => {
      this.studentList = data;
    })*/

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.selectedId = parseInt(param.get('id'));
    });
  }

  moveBack() :void{
    this.router.navigate(['/view-student'])
  }

  moveToStudentInfo(student :User) :void{
    this.router.navigate(['/student/student-details',student.id])
    //this.router.navigate([student.student_id],{relativeTo:this.route});
  }

  isSelected(student: User): boolean{
    console.log('this.selectedId-' + this.selectedId)
    console.log('student.student_id-' + student.id)
    return this.selectedId ===student.id
  }
}
