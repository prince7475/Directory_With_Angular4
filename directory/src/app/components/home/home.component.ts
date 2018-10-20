import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage"
  myBoolen=true
  person = {
    name: "Prince",
    age: 20
  }

  // Custom Property binding 
  // This is getting the input we passed in 
  // for us to use @input we must import if from @angular/core
  // next go to home.component.html to see how we use this.
  @Input() kellem;
  // Custom Property binding 
  
  
  // @Output custom event binding 
  // step: 3
  // We use the @Output function which we will have to import from @angular/core to be able to use
  // the Output tell angular that we want to to output this function so our parent can use it, we create a new eventEmitter( which you also need to import )
  @Output() onYell = new EventEmitter();
  // next step: go to the home.component.html to see what fireYellEvent is for.

  // Step:5 
  // the fireYellEvent takes in the event as an argument and invoke the onYell function and emit it, passing the event given as an argument
    fireYellEvent(e){
      this.onYell.emit(e)
    }

  constructor() { }

  ngOnInit() {
  }
  ConsoleLogMe(val){
    console.log(val)
  }

}
