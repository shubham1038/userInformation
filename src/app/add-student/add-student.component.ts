import { Component, OnInit } from '@angular/core';
import { StudentService } from '../core/service/student.service';
import { Student } from '../core/model/student';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../core/model/user';
import { InteractionService } from '../core/service/interaction.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  headerVal: string = 'Add User'
  student: User = new User();
  public submitted: boolean = false;
  newUser = new User();

  constructor(private studentService: StudentService,
    private interactionService: InteractionService) {

  }

  ngOnInit(): void {
    this.submitted = false;
  }

  studentsaveform = new FormGroup({
    student_name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    student_email: new FormControl('', [Validators.required, Validators.email]),
  });

  saveStudent() {
    this.student = new User();
    this.student.name = this.StudentName.value;
    this.student.email = this.StudentEmail.value;
    this.submitted = true;
    this.interactionService._user = this.student;
    this.interactionService.addUsers(this.student)
    this.save();
  }

  save() {
    this.studentService.createStudent(this.student).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.student = new User();
  }

  get StudentName() {
    return this.studentsaveform.get('student_name');
  }

  get StudentEmail() {
    return this.studentsaveform.get('student_email');
  }

}
