import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AppGuardService implements CanActivate {
  constructor(private userService: UserService,
              private router: Router) {

  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean {
    if (this.userService.isLogged()) {
      return true;
    }

    this.router.navigate(['login'], {
      queryParams: {
        return: state.url
      }
    });

    return false;
  }
}
