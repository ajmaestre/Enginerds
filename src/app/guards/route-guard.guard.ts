import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { GuardService } from './guard.service';
import { IsAuth } from '../interfaces/isAuth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {

  constructor(private guardService: GuardService){}

  canActivate() {
    return this.guardService.isAdmin().pipe(map(
      (res: IsAuth) => {
        return res.response;
      }
    ));
  }
  
}
