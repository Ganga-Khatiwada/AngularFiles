import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
  <input [(ngModel)]="entertext" type="text">
  {{entertext}}
  `,
  styles: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public entertext="";
  constructor() { }

  ngOnInit() {
  }

}
