import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotfoundPageComponent implements OnInit {
  darkTheme: boolean = true;

  constructor( private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.sendHasDarkTheme(this.darkTheme);
  }

}
