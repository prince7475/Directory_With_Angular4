import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app works!, woop woop."

}






  // Custom Property binding:
  // This is the data we are sending to the home component
  // next go to: app.component.html
  // kellem = {
  //   name : "Kellem Afriye",
  //   age: 30
  // }
  // Custom Property binding 



  // @output Custom event binding 
  // step: 2
  // this is the fuction that will run once the onYell function in home component is actived 
  // next step: go to the home.component.ts to see the onYell function and how we passed up the event
  // yell(e){
  //   console.log('I am yelling')
  //   console.log(e)
  // }

