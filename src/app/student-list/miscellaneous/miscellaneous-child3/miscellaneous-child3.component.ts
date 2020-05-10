import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miscellaneous-child3',
  templateUrl: './miscellaneous-child3.component.html',
  styleUrls: ['./miscellaneous-child3.component.css']
})
export class MiscellaneousChild3Component implements OnInit {

  constructor() { }

  name :string;
  private _customerName: string;

  ngOnInit(): void {

  }
  get customerName() :string{
    return this._customerName;
  }

  set customerName(customerName :string){
    this._customerName =customerName;
  }
}
