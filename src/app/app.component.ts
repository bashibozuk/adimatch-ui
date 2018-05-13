import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationService} from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';
  hasNew = false;
  constructor(private notificationService: NotificationService){}

  ngOnInit() {
    this.notificationService.loadNotifications();
    this.notificationService.onNotifications.subscribe(() => {
      this.hasNew = this.notificationService.hasNew;
    });
  }

  ngOnDestroy() {
    this.notificationService.onNotifications.unsubscribe();
  }
}
