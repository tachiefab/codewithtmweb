import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from 'src/app/core/services/blog/headerService';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent implements OnInit {
  @Input('header') header;

  constructor(private headerServie:HeaderService) { }

  headerInfo:any;

  ngOnInit(): void {
    this.headerServie.sendMessage({});
    this.headerServie.cast.subscribe(content=> this.headerInfo = content);
  }

}
