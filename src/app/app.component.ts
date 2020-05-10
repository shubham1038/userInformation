import { Component, OnInit } from '@angular/core';
import { InteractionService } from './service/interaction.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'student-data';
 // respMessage :string;
  constructor(private inreractionService : InteractionService){}

  ngOnInit(): void {
    // this.inreractionService.studentList$.subscribe(
    //   message => this.respMessage = message
    // )
  }

  // clickToHello(){
  //   this.inreractionService.sentMessage('Good Morning Child')
  // }

  // clickToThanks(){
  //   this.inreractionService.sentMessage('Thanks Child')
  // }
}
 