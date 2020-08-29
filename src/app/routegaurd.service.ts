import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RoutegaurdService implements CanActivate {

  constructor( private router: Router, private cookieService: CookieService) { }
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const mrToken = this.cookieService.get('mr-token');

    if (mrToken) {
      // logged in
      return true;
    }
    this.router.navigate(['/Login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}