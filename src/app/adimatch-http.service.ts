import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class AdimatchHttpService {

  private static readonly PREFIX = 'api';

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${AdimatchHttpService.PREFIX}/login`, {
      email, password
    });
  }


}
