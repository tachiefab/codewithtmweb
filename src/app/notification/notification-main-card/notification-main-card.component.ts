import { Component, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-notification-main-card',
  templateUrl: './notification-main-card.component.html',
  styleUrls: ['./notification-main-card.component.css']
})
export class NotificationMainCardComponent implements OnInit {
  @Input('notification') notification;

  constructor() { }

  ngOnInit(): void {
  }

}
