import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

import { HeaderService } from './core/services/blog/headerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codewithtmweb';
 

  constructor(
    private metaTagService: Meta,
    private headerService:HeaderService,
    ) {}

  darkTheme:any;
  

  ngOnInit(): void {

    // Adding meta info
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Tachie Musah' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
    this.headerService.hasDarkThemeCast.subscribe(content=> this.darkTheme = content);
  }

}
