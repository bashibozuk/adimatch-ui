import { Component, OnInit } from '@angular/core';
import {AdimatchHttpService} from '../adimatch-http.service';
import {UserService} from '../user.service';
import {LoginModel} from '../model/login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public valid = true;

  public loginModel = new LoginModel();

  constructor(private http: AdimatchHttpService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    if (!this.validate()) {
      return;
    }

    this.http.login(this.loginModel)
      .subscribe((response: any) => {
        if ('error' in response) {
          this.valid = false;
          return;
        }
        this.userService.login(response);
        this.router.navigate(['']);
      });
  }

  private validate(): boolean {
    this.valid = true;
    if (!this.loginModel.username) {
      this.valid = false;
    }

    if (!this.loginModel.password) {
      this.valid = false;
    }

    return this.valid;
  }

}
