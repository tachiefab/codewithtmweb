import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent implements OnInit {

  constructor(private headerServie:HeaderService) { }

  headerInfo:any;

  ngOnInit(): void {
    this.headerServie.sendHeaderInfo({});
    this.headerServie.cast.subscribe(content=> this.headerInfo = content);
    // console.log(this.headerInfo.content.title)
  }

}
