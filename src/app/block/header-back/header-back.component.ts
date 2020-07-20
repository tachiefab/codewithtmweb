import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-back',
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.css']
})
export class HeaderBackComponent implements OnInit {
  @Input('header') header;

  constructor() { }

  ngOnInit(): void {
  }

}
