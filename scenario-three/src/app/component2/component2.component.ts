import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <h2>{{"Hello "+ parentData}}</h2>
  `,
  styles: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
