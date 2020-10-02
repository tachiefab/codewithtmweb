import { Component } from '@angular/core';
import { HeaderService } from './core/services/blog/headerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codewithtmweb';
 

  constructor(
    private headerService:HeaderService,
    ) {}

  darkTheme:any;
  

  ngOnInit(): void {
    this.headerService.hasDarkThemeCast.subscribe(content=> this.darkTheme = content);
  }

}
