import { Component, OnInit } from '@angular/core';
import {AdimatchHttpService, MatchFilter} from '../adimatch-http.service';
import {Sport, UserModel} from '../model/user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private matches: UserModel[];

  private current = 0;

  constructor(private http: AdimatchHttpService,
              private userService: UserService) { }

  ngOnInit() {
    this.load();
  }

  get currentMatch(): UserModel | null {
    return this.matches[this.current] ? this.matches[this.current] : null;
  }

  load(): void {
    this.http.getMatches({
      sports: this.userService.user.sports
    })
      .subscribe((response: UserModel[]) => {
        this.matches = response;
        this.current = 0;
      });
  }

  onFilterChanged(selectedSports: Sport[]): void {
    this.userService.user.sports = selectedSports;
    this.load();
  }

  onDecline() {
    if (this.current < this.matches.length - 1) {
      this.current++;
    }
  }

  onChallenge() {
    if (!this.currentMatch) {
      return;
    }
    this.http.challenge(this.currentMatch, this.userService.user.sports[0])
      .subscribe(() => {
        alert('You made new challenge');
      });
  }
}
