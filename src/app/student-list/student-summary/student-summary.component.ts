import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/service/student.service';
import { Subject } from 'rxjs';
import { User } from 'src/app/core/model/user';
import { Posts } from 'src/app/core/model/posts';
import { Comments } from 'src/app/core/model/comments';
import { delay, delayWhen } from 'rxjs/operators';
import { AppLoaderService } from 'src/app/core';

@Component({
  selector: 'app-student-summary',
  templateUrl: './student-summary.component.html',
  styleUrls: ['./student-summary.component.css']
})
export class StudentSummaryComponent implements OnInit {

  errorMessage: string;
  loadingValue: String;
  users: User;
  posts: Posts;
  comments: Comments;
  headerVal: string = 'Async call using Angular Promise or await';

  constructor(private serviceService: StudentService,
    private loaderService: AppLoaderService) { }

  title = 'my-http-interceptor';
  isLoading: Subject<String>;

  ngOnInit() {
    this.loaderService.show();
    this.loaderService.isLoading.subscribe(
      data => this.loadingValue = data
    );
    this.serviceService.getAllPostCall().subscribe(
      data => console.log(data),
      error => {
        this.loaderService.hide()
        this.errorMessage = error.message
        console.log(error)
      }
    )

    this.serviceService.getAllPost().subscribe(
      data => console.log(data),
      error => {
        this.errorMessage = error.message
        console.log(error)
      }
    )
    this.getAllDataUsingPromiseThen()
  }

  //USing async and await to manage async call sequencely
  async getAllData() {
    const users = await this.serviceService.getUsers();
    this.users = users;

    const posts = await this.serviceService.getUserPosts(users[0].id);
    this.posts = posts;

    const comments = await this.serviceService.getPostComments(posts[0].id);
    this.comments = comments;
  }


  //USing Promise Then manage async call sequencely
  //https://stackoverflow.com/questions/52115904/how-to-call-a-function-after-the-termination-of-another-function-in-angular/52116063
  getAllDataUsingPromiseThen() {

    this.serviceService.getUsers().then(users => {
      this.users = users
      delay(8000);
      this.serviceService.getUserPosts(users[0].id).then(posts => {
        this.posts = posts;
        this.serviceService.getPostComments(posts[0].id).then(comm => {
          this.comments = comm;
        });
      })
    }).catch(error => {
      this.loaderService.hide()
      this.errorMessage = error.message
    })

    /* const users = await this.serviceService.getUsers();
     this.users = JSON.stringify(users);
     const posts = await this.serviceService.getUserPosts(users[0].id);
     this.posts =JSON.stringify(posts);
     const comments = await this.serviceService.getPostComments(posts[0].id);*/
  }

}
