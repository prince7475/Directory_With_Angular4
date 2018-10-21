import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  id: String
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  
  }

  ngOnInit() {
  }
 
}
