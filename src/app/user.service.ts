import {Injectable} from '@angular/core';
import {UserModel} from './user.model';

@Injectable()
export class UserService {
  user: UserModel | null;

  public login(user: UserModel): void {
    this.user = user;
  }

  public logout(): void {
    this.login(null);
  }

  public isLogged(): boolean {
    return !!this.user;
  }
}
