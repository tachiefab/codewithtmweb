import { Component, OnInit } from '@angular/core';
import { BlogService } from './../../core/services/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  postList : any;

  constructor(private blogService:BlogService) {
    this.getPosts();
   }

   getPosts = () => {
    this.blogService.getAll().subscribe(
      data => {
        this.postList = data.results;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
