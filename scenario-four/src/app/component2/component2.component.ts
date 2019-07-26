import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  template:`
  <button (click)="fireEvent()">Send Text</button>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

@Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Ganga');
  }
}
