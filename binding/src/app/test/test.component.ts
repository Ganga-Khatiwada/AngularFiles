import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2> 
        Welcome {{name}}
  </h2>
  <h2> 
        {{3+2}}
  </h2>
  <h2> 
        {{"Welcome "+name}}
  </h2>
  <h2> 
        {{name.length}}
  </h2>
  <h2> 
        {{name.toUpperCase()}}
  </h2>
  <h2> 
        {{greetUser()}}
  </h2>
  <h2> 
        {{site}}
  </h2>
  <input [disabled]="isDisabled" [id]="myId" type="text" value="Ganga" />

  <h2 class="text-special"> Welcome to stackroute </h2>
  <h2 [class]="success"> Welcome to stackroute </h2>
  <h2 [class.text-danger]="hasError">Welcome to stackroute </h2>
  <h2 [ngClass]="messageClasses">Welcome to stackroute </h2>
  <button (click)="onClick($event)">Greet</button>
{{greeting}}
  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name="Ganga";
  public site=window.location.href;
  public myId="testId"; 
  public isDisabled=false;
  public success="text-success";
  public hasError=false;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special": this.isSpecial
  }
  public greeting="";
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+this.name;
  }
  onClick(event){
  console.log(event)
  this.greeting=event.type ;
  }
}
