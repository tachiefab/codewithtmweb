import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../core/services/notification/notification.service';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
