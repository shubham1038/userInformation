import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Subject } from 'rxjs';
import { AppLoaderService } from '../app-loader.service';
import { User } from 'src/app/model/user';
import { Posts } from 'src/app/model/posts';
import { Comments } from 'src/app/model/comments';

@Component({
  selector: 'app-app-interceptor',
  templateUrl: './app-interceptor.component.html',
  styleUrls: ['./app-interceptor.component.css']
})
export class AppInterceptorComponent implements OnInit {

  errorMessage: string;
  loadingValue: String;
  users: User;
  posts: Posts;
  comments: Comments;

  constructor(private serviceService: StudentService,
    private loaderService: AppLoaderService) { }
  title = 'my-http-interceptor';
  isLoading: Subject<String>;

  ngOnInit() {
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
    console.log(users);
    console.log(posts);
    console.log(comments);
  }


  //USing Promise Then manage async call sequencely
  //https://stackoverflow.com/questions/52115904/how-to-call-a-function-after-the-termination-of-another-function-in-angular/52116063
  getAllDataUsingPromiseThen() {

    this.serviceService.getUsers().then(users => {
      this.users = users
      this.serviceService.getUserPosts(users[0].id).then(posts => {
        this.posts = posts;
        this.serviceService.getPostComments(posts[0].id).then(comm => {
          this.comments = comm;
        });
      })
    }).catch(error => {
      this.loaderService.hide()
      this.errorMessage=error.message
    })



    /* const users = await this.serviceService.getUsers();
     this.users = JSON.stringify(users);
     const posts = await this.serviceService.getUserPosts(users[0].id);
     this.posts =JSON.stringify(posts);
     const comments = await this.serviceService.getPostComments(posts[0].id);*/



  }

}
