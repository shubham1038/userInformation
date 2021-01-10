import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StudentService } from '../core/service/student.service';
import { Student } from '../core/model/student';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { InteractionService } from '../core/service/interaction.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { User } from '../core/model/user';
import { map, isEmpty } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalService } from '../shared/components/confirmok/data/modal-service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, AfterViewInit {

  public studentList: Observable<Student[]>;
  public userList: any;
  public deleteMessage: boolean = false;
  public isupdated: boolean = false;
  studentlist: any;
  public user = new User();
  public addedUser = new User();
  student: Student = new Student();
  public isupdatedMess: boolean = true;
  public parentDataUsingGetterSetter = 'I am Sending data from Parent Componet Using Getter Setter'
  public errorMsg: string;
  public isErrorMessage: boolean = false;
  public headerVal: string = 'User Information';

  constructor(private studentservice: StudentService,
    private inreractionService: InteractionService,
    private route: Router,
    private spinner: NgxSpinnerService,
    private modalService: ModalService) { }
  ngAfterViewInit(): void {
  }

  moveNext(): void {
    this.route.navigate(['/student/student-details'])
  }

  ngOnInit(): void {
    this.isupdated = false;
    this.spinner.show();
    this.inreractionService.user$.subscribe(
      user => {
        this.addedUser = user;
        console.log(this.addedUser);

      }
    )


    this.studentservice.getStudentList()
      .subscribe(
        data => {
          this.userList = data;
        },
        err => {
          this.errorMsg = err;
          this.isErrorMessage = true;
          this.studentservice.getUserList()
            .subscribe(
              data => {
                if (this.inreractionService._user) {
                  data.length
                  this.inreractionService._user.id = data.length + 1
                  data.push(this.inreractionService._user);
                }
                this.userList = data;
                this.spinner.hide();
              },
              error => {
                this.errorMsg = error;
                this.isErrorMessage = true;
              }
            )
        }
      )
  }

  deleteStudent(id: number) {

    this.studentservice.deleteStudent(id).subscribe(data => {
      console.log(data)
      this.studentservice.getStudentList().subscribe(
        data => {
          this.deleteMessage = true;
          console.log(data)
          this.userList = data;
          this.modalService.confirmOK('User Data Deleted', () => { }, "Success")
        }
      )
    },
      error => {
        console.log(error);
        this.studentservice.getUserList()
          .subscribe(
            data => {
              this.userList = data.filter(x => x.id != id);
              this.deleteMessage = true;
              this.modalService.confirmOK('User Data Deleted', () => { }, "Success")
              //this.userList = data;
            }
          )
      }
    )
  }

  updateStudent(id: number) {

    this.studentservice.getUser(id).subscribe(
      data => {
        this.isupdated = true;
        this.user = data[0]
      },
      error => console.log(error.message)
    );
  }

  studentupdateform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl()
  });

  updateStu(updstu: any) {
    this.user = new User();
    this.user.id = this.StudentId.value;
    this.user.name = this.StudentName.value;
    this.user.email = this.StudentEmail.value;
    // this.student.student_branch=this.StudentBranch.value;  
    // console.log(this.StudentBranch.value);


    this.studentservice.updateStudent(this.user.id, this.user).subscribe(
      data => {
        this.isupdated = true;
        this.studentservice.getStudentList().subscribe(data => {
          this.isupdatedMess = false;
          this.userList = data
        })
      },
      error => {
        console.log(error);
        this.studentservice.getUserList().subscribe(
          data => {
            this.userList = data.map(
              user => {
                if (user.id === this.user.id) {
                  user.name = this.user.name;
                  user.email = this.user.email;
                  return user;
                } else {
                  return user;
                }
              }
            )
          }, error => console.log(error)
        );
      })
  };

  /* updateStu(updstu : any){  
       this.student=new Student();   
      this.student.student_id=this.StudentId.value;  
      this.student.student_name=this.StudentName.value;  
      this.student.student_email=this.StudentEmail.value;  
     // this.student.student_branch=this.StudentBranch.value;  
     // console.log(this.StudentBranch.value);  
      this.studentservice.updateStudent(this.student.student_id,this.student).subscribe(  
       data => {       
         this.isupdated=true;  
         this.studentservice.getStudentList().subscribe(data =>{  
           this.isupdatedMess = false;
           this.studentList =data  
           })  
       },  
       error => console.log(error)); 
   }*/
  get StudentName() {
    return this.studentupdateform.get('name');
  }

  get StudentEmail() {
    return this.studentupdateform.get('email');
  }

  get StudentId() {
    return this.studentupdateform.get('id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }

  hideError(): void {
    this.isErrorMessage = false;
  }
}
