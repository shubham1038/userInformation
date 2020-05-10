import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-miscellaneous-child4',
  templateUrl: './miscellaneous-child4.component.html',
  styleUrls: ['./miscellaneous-child4.component.css']
})
export class MiscellaneousChild4Component implements OnInit {

  constructor() { }

  @Input('parentDataToChild4') parentToChild4: String;
  private _parentToChild4Getter :String;
  @Output() greetEvent = new EventEmitter();

  ngOnInit(): void {
  }

  get parentToChild4Getter() :String {
    return this._parentToChild4Getter;
  }

  @Input()
  set parentToChild4Getter (value :String){
    this._parentToChild4Getter = value
  }

  childGreet(){
    this.greetEvent.emit('Value from Child component -4');
  }
}
