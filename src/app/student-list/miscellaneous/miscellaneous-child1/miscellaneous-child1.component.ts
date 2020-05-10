import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/service/interaction.service';

@Component({
  selector: 'app-miscellaneous-child1',
  templateUrl: './miscellaneous-child1.component.html',
  styleUrls: ['./miscellaneous-child1.component.css']
})
export class MiscellaneousChild1Component implements OnInit {

  greetingMessage: string;
  constructor(private interactionService : InteractionService) { }
  viewChildMessage : String; //Value is comming from Parent using @ViewChild() decorator
  ngOnInit(): void {
    this.interactionService.studentList$.subscribe(
      message => {
        if(message == 'Good Morning Child'){
          this.greetingMessage = message + "-1";
          alert(message)
          this.interactionService.sentMessage('Good Morning Friend')
        }
        if(message == 'Thanks Child'){
          this.greetingMessage = message + "-1";
          alert(message)
          this.interactionService.sentMessage('Welcome Friend')
        }
      }
    )
  }

 

}
