import { Component, OnInit } from '@angular/core';

import { TagsService } from './../services/tags.service';

@Component({
  selector: 'app-tag-card',
  templateUrl: './tag-card.component.html',
  styleUrls: ['./tag-card.component.css']
})
export class TagCardComponent implements OnInit {
  tagList : any;

  constructor(private tagsService:TagsService) {
    this.getTags();
   }

  getTags = () => {
    this.tagsService.getAll().subscribe(
      data => {
        this.tagList = data.results;
        console.log(this.tagList)
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
