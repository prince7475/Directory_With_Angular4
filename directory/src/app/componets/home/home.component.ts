import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  ConsoleLogMe(val){
    console.log(val)
  }

}
