import { Component, OnInit } from '@angular/core';

@Component({

  //3 ways to specify selectors
  // selector: 'app-test',
  // selector: '.app-test',
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  template: `<div>
                Inline Template
             </div>`,
  //styleUrls: ['./test.component.css']
  styles:[`div{
    color:red
  }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
