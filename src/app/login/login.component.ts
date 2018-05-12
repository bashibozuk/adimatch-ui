import { Component, OnInit } from '@angular/core';
import {AdimatchHttpService} from '../adimatch-http.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;

  public password: string;

  public valid = true;

  constructor(private http: AdimatchHttpService,
              private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(): void {
    if (!this.validate()) {
      return;
    }

    this.http.login(this.email, this.password)
      .subscribe((response: any) => {
        this.userService.login(response);
      });
  }

  private validate(): boolean {
    this.valid = true;
    if (!this.email) {
      this.valid = false;
    }

    if (!this.password) {
      this.valid = false;
    }

    return this.valid;
  }

}
