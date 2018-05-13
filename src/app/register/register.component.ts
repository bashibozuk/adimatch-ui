import { Component, OnInit } from '@angular/core';
import {ALL_SPORTS, Sport, UserModel} from '../model/user.model';
import {AdimatchHttpService} from '../adimatch-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = new UserModel();

  public sports = ALL_SPORTS;

  public errors: {[k: string]: string} = {};

  constructor(private http: AdimatchHttpService,
              private router: Router) { }

  ngOnInit() {
  }

  public toggleSport(sport: Sport) {
    const key = this.user.sports.indexOf(sport);
    if (key !== -1) {
      this.user.sports.splice(key, 1);
    } else {
      this.user.sports.push(sport);
    }

    this.user.sports = this.user.sports.slice();
  }

  public register() {
    if (this.validate()) {
      this.http.register(this.user).subscribe(() => {
        this.router.navigate(['login']);
      });
    }
  }

  private validate(): boolean {
    const errors = {};
    if (!this.user.username) {
      errors['username'] = 'Invalid value';
    }

    if (!this.user.password) {
      errors['password'] = 'Invalid value';
    }

    if (!this.user.email) {
      errors['email'] = 'Invalid value';
    }

    this.errors = errors;

    return Object.keys(this.errors).length === 0;
  }
}
