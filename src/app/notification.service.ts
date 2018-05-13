import {NotificationModel} from './model/notification.model';
import {EventEmitter, Injectable} from '@angular/core';
import {AdimatchHttpService} from './adimatch-http.service';

@Injectable()
export class NotificationService {
  public readonly INTERVAL = 1000;

  public notifications: NotificationModel[] = [];

  public onNotifications = new EventEmitter();

  public hasNew = false;

  public constructor(private http: AdimatchHttpService) {
  }

  public loadNotifications() {
    setInterval(() => {
      this.http.getNotifications()
        .subscribe((notifications: NotificationModel[]) => {
          if (!this.hasNew) {
            this.hasNew = this.notifications.length !== notifications.length;
            this.onNotifications.emit();
          }
          this.notifications = notifications;
        });
    }, this.INTERVAL);
  }
}
