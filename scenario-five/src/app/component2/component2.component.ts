import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <app-component3 (childEvent)="message($event)" ></app-component3>
  `,
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public childEvent=new EventEmitter();
  // public message="";
  constructor() { }

  ngOnInit() {
  }

  message($event){
    this.childEvent.emit($event);
  }
}
