import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  // classes = {'blue': false, 'red': true,'underline':false }
  // test = true
  // id: String

  students = [
    {name: "prince", favColor: "yellow"},
    {name: "Mike", favColor: "blue"},
    {name: "Aaron", favColor: "green"},
    {name: "Seth", favColor: "pink"}
  ]

  constructor(private route: ActivatedRoute) {
    // this.id = route.snapshot.params['id'];
  
  }

  ngOnInit() {
  }
 
}
