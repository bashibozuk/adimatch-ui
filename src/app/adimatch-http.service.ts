import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {LoginModel} from './model/login.model';
import {UserModel} from './model/user.model';

@Injectable()
export class AdimatchHttpService {

  private static readonly PREFIX = 'api';

  constructor(private http: HttpClient) {

  }

  login(loginModel: LoginModel): Observable<any> {
    return this.http.post(
      `${AdimatchHttpService.PREFIX}/login`, loginModel);
  }

  register(user: UserModel): Observable<any> {
    return this.http.post(
      `${AdimatchHttpService.PREFIX}/register`, user);
  }
}
