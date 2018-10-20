import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  ConsoleLogMe(val){
    console.log(val)
  }

}
