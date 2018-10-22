import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [LoggingService]

})
export class DirectoryComponent implements OnInit {
  // classes = {'blue': false, 'red': true,'underline':false }
  // test = true
  // id: String
  terms:any;
  name:string;
  color:string
  students:any;

  constructor(private route: ActivatedRoute, private logger:LoggingService) {
    // this.id = route.snapshot.params['id'];
  }
  ngOnInit() {
    this.students = this.logger.students
  }

  logIt(){
    this.logger.log(this.name,this.color)
    this.name = ""
    this.color = ""
  }

  removeIt(name){
    console.log(name)
    let result = this.logger.remove(name)
    this.students = result
  }
 
}
