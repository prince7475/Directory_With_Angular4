import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // Custom Property binding:
  // This is the data we are sending to the home component
  // next go to: app.component.html
  kellem = {
    name : "Kellem Afriye",
    age: 30
  }
  // Custom Property binding 


  title = 'Directory';
}
