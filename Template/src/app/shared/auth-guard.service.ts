import { JwtserviceService } from './jwtservice.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private jwtService: JwtserviceService) {}
  canActivate( route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
              ) {
                  if (this.jwtService.getToken()) {
                    return true;
                  }
                  this.router.navigate(['/login']);
                  return false;
              }
}
