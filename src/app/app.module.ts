import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';
import {UserService} from './user.service';
import {AppGuardService} from './app-guard.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { StatsComponent } from './stats/stats.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {AdimatchHttpService} from './adimatch-http.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {NotificationService} from './notification.service';
import { NotificationsComponent } from './notifications/notifications.component';

const appRoutes: Routes = [{
  path: '', component: HomeComponent, canActivate: [AppGuardService]
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'register', component: RegisterComponent
}, {
  path: 'events', component: EventsComponent, canActivate: [AppGuardService]
}, {
  path: 'history', component: HistoryComponent, canActivate: [AppGuardService]
}, {
  path: 'notifications', component: NotificationsComponent, canActivate: [AppGuardService]
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HistoryComponent,
    EventsComponent,
    SearchFormComponent,
    StatsComponent,
    RegisterComponent,
    ProfileComponent,
    NotificationsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AppGuardService,
    AdimatchHttpService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
