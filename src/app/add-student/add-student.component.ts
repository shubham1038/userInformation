import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../model/user';
import { InteractionService } from '../service/interaction.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService : StudentService,
              private interactionService : InteractionService) { 

    }

  student :User = new User();
  public submitted: boolean= false;
  newUser = new User();

  ngOnInit(): void {
    this.submitted =false;
  }

  studentsaveform=new FormGroup({  
    student_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    student_email:new FormControl('',[Validators.required,Validators.email]),  
    //student_branch:new FormControl()  
  }); 

  saveStudent(){
    this.student =new User();
    this.student.name = this.StudentName.value;
    this.student.email = this.StudentEmail.value;
   // this.student.student_branch = this.StudentBranch.value;
    this.submitted = true;
    this.interactionService._user = this.student;


    this.interactionService.addUsers(this.student)
    this.save();
  }

  save(){
    this.studentService.createStudent(this.student).subscribe(
      data => console.log(data),
      error => console.log(error)
      );
      this.student = new User();
  }

  get StudentName(){  
    return this.studentsaveform.get('student_name');  
  }  
  
  get StudentEmail(){  
    return this.studentsaveform.get('student_email');  
  }  
  
 /* get StudentBranch(){  
    return this.studentsaveform.get('student_branch');  
  }*/
}
