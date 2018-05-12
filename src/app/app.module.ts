import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'events', component: EventsComponent
}, {
  path: 'history', component: HistoryComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HistoryComponent,
    EventsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
