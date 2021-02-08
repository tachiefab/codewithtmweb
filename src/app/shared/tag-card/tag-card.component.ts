import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
