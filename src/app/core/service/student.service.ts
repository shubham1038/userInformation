import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { Student } from '../model/student';
import { catchError, retry, timeout, timeoutWith } from 'rxjs/operators'
import { User } from '../model/user';
import { Posts } from '../model/posts';
import { Comments } from '../model/comments';

@Injectable()
export class StudentService {

  private baseUrl = "http://localhost:8081/api/";

  //private baseUserUrl = "http://ec2-15-206-159-184.ap-south-1.compute.amazonaws.com/fse-pm-app/api/";
  private baseUserUrl = "https://shubh1038.xyz/fse-pm-app/api/";
  
  constructor(private http: HttpClient) {

  }

  getUserList(): Observable<User[]> {

    return this.http.get<User[]>(`${this.baseUserUrl}` + "user-list").pipe(
      retry(0),
      timeout(2000),
      catchError(err => {
        return this.http.get<User[]>('assets/data/users.json');
        //return throwError(err.message || 'Server Error');
      })
    );
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUserUrl}` + "user-list").pipe(
      retry(5),
      catchError(err => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUserUrl}` + 'save-user', student);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUserUrl}` + 'delete-user/' + `${id}`, { responseType: 'text' });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUserUrl}` + 'user/' + `${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  /*getStudent(id: number): Observable<any> {
    return this.http.get<Student>(`${this.baseUrl}` + 'student/' + `${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }*/

  updateStudent(id: number, value: User): Observable<Object> {
    return this.http.post(`${this.baseUserUrl}/update-user/${id}`, value);
  }

  // updateStudent(id: number, value: User): Observable<Object> {
  //   return this.http.post(`${this.baseUserUrl}users/${id}`, value);
  // }

  getAllPostCall(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  getAllPost(): Observable<any> {
    const header = new HttpHeaders({
      'neme': 'Shubham'
    })

    const params = new HttpParams().append('id', '2')

    return this.http.get('https://jsonplaceholder.typicode.com/todos/1', { headers: header, params: params })
      .pipe(
        retry(2),
        catchError(this.errorHandler)
      );
  }

  getUsers() {
    //https://jsonplaceholder.typicode.com/users --Replace with JSON as open api is not working sometimes
    return this.getUserList()
      .toPromise();
  }
  //`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  getUserPosts(userId) {
    return this.http.get<Posts>('assets/data/posts.json')
      .toPromise();
  }
  //`https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  getPostComments(postId) {
    return this.http.get<Comments>('assets/data/comments.json')
      .toPromise();
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'Server Error')
  }


}
