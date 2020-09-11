import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';
import { AuthUserService } from './shared/utility/authUser.service';

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
