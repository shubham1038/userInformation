import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { InteractionService } from '../service/interaction.service';


@Component({
  selector: 'app-student-list-child',
  templateUrl: './student-list-child.component.html',
  styleUrls: ['./student-list-child.component.css']
})
export class StudentListChildComponent implements AfterViewInit {

 
  public name :String;
  private _customerName: string;
  @Input('parentToChild') parentToChildVar: string;

  private _parentparentToChildGetterSetter: string;

  @ViewChild('elementRef') elementReference: ElementRef; //ElementRef using ViewChild

  childVariable: string = "Child Value";

  message : string; // Value is comming from Parent using @ViewChild() decorator

  @Output() greetEvent = new EventEmitter();
  constructor(private interactionService: InteractionService) { }

  get customerName() :string{
    return this._customerName;
  }

  set customerName(customerName :string){
    this._customerName =customerName;
  }

  get parentparentToChildGetterSetter(): string{
    return this._parentparentToChildGetterSetter
  }

  @Input()
  set parentparentToChildGetterSetter(value: string){
    this._parentparentToChildGetterSetter = value;
  }

  ngOnInit(): void {
    this.interactionService.studentList$.subscribe(
      message => {
        if(message == 'Good Morning Child'){
          alert(message)
          this.interactionService.sentMessage('Good Morning Friend')
        }
        if(message == 'Thanks Child'){
          alert(message)
          this.interactionService.sentMessage('Welcome Friend')
        }
      }
    )
  }

  ngAfterViewInit(): void {
    this.elementReference.nativeElement.focus();
  }

  greatShubham(){
    alert('Hi Angular');
  }

  childGreet(){
    this.greetEvent.emit('Value from Child component');
  }
}
