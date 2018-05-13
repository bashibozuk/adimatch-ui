import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs/index';
import {LoginModel} from './model/login.model';
import {Sport, UserModel} from './model/user.model';

export interface MatchFilter {
  sports: Sport[];
}

@Injectable()
export class AdimatchHttpService {

  private static readonly PREFIX = 'api';

  private readonly MOCK = false;

  constructor(private http: HttpClient) {

  }

  login(loginModel: LoginModel): Observable<any> {
    if (this.MOCK) {
      const mockUser = new UserModel();
      mockUser.username = 'mock user';
      const sub =  Observable.create( (observer) => {
        observer.next(mockUser);
      });

      return sub;
    }
    return this.http.post(
      `${AdimatchHttpService.PREFIX}/login`, loginModel);
  }

  register(user: UserModel): Observable<any> {
    return this.http.post(
      `${AdimatchHttpService.PREFIX}/register`, user);
  }

  getMatches(filter: MatchFilter): Observable<any> {
    return this.http.post(
      `${AdimatchHttpService.PREFIX}/suggestion`, {
         sports: filter.sports
      });
  }

  challenge(user: UserModel, sport: Sport) {
    return this.http.post(
      `${AdimatchHttpService.PREFIX}/challenge`, {
        defender_id: user.id,
        sport: sport
      });
  }
}
