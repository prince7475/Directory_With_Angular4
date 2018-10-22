import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  allPost: any;
  terms:any;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (data) => {this.allPost = data.json()
      console.log(data.json())
      }
      
    )
  }

}
