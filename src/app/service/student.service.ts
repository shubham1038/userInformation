import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Student } from '../model/student';
import { catchError, retry } from 'rxjs/operators'
import { User } from '../model/user';
import { Posts } from '../model/posts';
import { Comments } from '../model/comments';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8081/api/";

  private baseUserUrl = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) {

  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUserUrl}` + "users").pipe(
      retry(5),
      catchError(err => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "students-list").pipe(
      retry(5),
      catchError(err => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + 'save-student', student);
  }

  deleteStudent(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}` + 'delete-student/' + `${id}`, { responseType: 'text' });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUserUrl}` + 'users/' + `${id}`)
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

  /*updateStudent(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-student/${id}`, value);
  }*/

  updateStudent(id: number, value: User): Observable<Object> {
    return this.http.post(`${this.baseUserUrl}users/${id}`, value);
  }
  
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
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users')
      .toPromise();
  }

  getUserPosts(userId) {
    return this.http.get<Posts>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .toPromise();
  }

  getPostComments(postId) {
    return this.http.get<Comments>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .toPromise();
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'Server Error')
  }


}
