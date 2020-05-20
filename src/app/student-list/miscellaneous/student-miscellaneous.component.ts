import { Component, OnInit, ViewChild } from '@angular/core';
import { InteractionService } from 'src/app/core/service/interaction.service';
import { MiscellaneousChild1Component } from './miscellaneous-child1/miscellaneous-child1.component';

@Component({
  selector: 'app-student-miscellaneous',
  templateUrl: './student-miscellaneous.component.html',
  styleUrls: ['./student-miscellaneous.component.css']
})
export class StudentMiscellaneousComponent implements OnInit {

  public childRespMessage: String;
  public inputDataTo4Child: string;
  public headerVal: string = 'Data flow between Parent-Child & Child-Parent and Sibling';
  @ViewChild(MiscellaneousChild1Component) child1Ref :MiscellaneousChild1Component;

  constructor(private interactionService : InteractionService) { }

  ngOnInit(): void {
    this.interactionService.studentList$.subscribe(
      message => this.childRespMessage = message
    )
  }

  clickToHello(){
    this.interactionService.sentMessage('Good Morning Child')
  }

  clickToThanks(){
    this.interactionService.sentMessage('Thanks Child')
  }

  clickToChild(){
    this.child1Ref.viewChildMessage = '@ViewChild() - Concept'
  }

  clickParentMethod(message :String){
    //alert(message)
    this.childRespMessage = message
  }
}
