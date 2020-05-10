import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous-child2',
  templateUrl: './miscellaneous-child2.component.html',
  styleUrls: ['./miscellaneous-child2.component.css']
})
export class MiscellaneousChild2Component implements OnInit {

  child2Variable :string = "Child -2"
  hashChild2Variable: String;

  constructor() { }

  ngOnInit(): void {
  }
  great(){
    this.hashChild2Variable = 'Click Even with Template Reference'
  }

}
