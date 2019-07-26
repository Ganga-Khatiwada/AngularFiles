import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component3',
  template: `
  <button (click)="fireEvent()">Send Text</button>
  `,
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Ganga');
  }
}
