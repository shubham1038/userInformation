import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public _user :User;
  
  private _studentListSource = new Subject<string>();
  studentList$ = this._studentListSource.asObservable();

  private _users = new Subject<User>();
  user$ = this._users.asObservable();
  constructor() { }

  public get user(): any{
    return this._user
  }

  public set user(user : any){
    this._user = user;
  }
  sentMessage(message : string){
    this._studentListSource.next(message);
  }

  addUsers(users : User){
    this._users.next(users)
  }
}
