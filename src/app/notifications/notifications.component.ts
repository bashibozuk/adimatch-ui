import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from '../notification.service';
import {NotificationModel} from '../model/notification.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  constructor(private notificationService: NotificationService) { }

  items: NotificationModel[] = []

  ngOnInit() {
    this.items = this.notificationService.notifications;
    this.notificationService.onNotifications.subscribe(() => {
      this.items = this.notificationService.notifications;
    });
  }

  ngOnDestroy() {
    this.notificationService.onNotifications.unsubscribe();
  }
}
