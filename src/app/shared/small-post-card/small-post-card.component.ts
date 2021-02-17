import { Component, OnInit} from '@angular/core';
import { BlogService } from './../services/blog.service';

@Component({
  selector: 'app-small-post-card',
  templateUrl: './small-post-card.component.html',
  styleUrls: ['./small-post-card.component.css']
})
export class SmallPostCardComponent implements OnInit {
  postList:any;

  constructor(private blogService: BlogService) {
    this.getMostViewedPosts();
   }

  getMostViewedPosts = () => {
    this.blogService.getAll().subscribe(
      data => {
        this.postList = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
