import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotfoundPageComponent implements OnInit {
  bootstrapClass = 'js-full-page page-404'
  headerBack: boolean = false;
  sideBar: boolean = false;

  constructor( private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.sendBootstrapClass(this.bootstrapClass);
    this.headerService.sendHeaderBack(this.headerBack);
    this.headerService.sendsideBar(this.sideBar)
  }

}
