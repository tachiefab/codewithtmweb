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

  bootstrapClass:any;
  headerBack:any;
  sideBar:any;
  isMainPage:any;
  whiteTheme:any;
  

  ngOnInit(): void {
    this.headerService.sendBootstrapClass({});
    this.headerService.headerCast.subscribe(content=> this.bootstrapClass = content);

    this.headerService.sendHeaderBack({});
    this.headerService.headerBackCast.subscribe(content=> this.headerBack = content);

    this.headerService.sendisMainPage({});
    this.headerService.isMainPageCast.subscribe(content=> this.isMainPage = content);

    this.headerService.sendsideBar({});
    this.headerService.sideBarCast.subscribe(content=> this.sideBar = content);

    this.headerService.sendHasWhiteTheme({});
    this.headerService.hasWhiteThemeCast.subscribe(content=> this.whiteTheme = content);

  }

}
