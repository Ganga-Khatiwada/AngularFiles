import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  // templateUrl: './component1.component.html',
  template: `
    <input #input type="text">
  <button (click)="onClick(input.value)">GreetMe</button>
  `,
  styles: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(value){
    console.log(value);
  }
}
