import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private login = false;
 
  constructor() { }

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.login;
  } 

   loginUtente(login: any) {
    if (login) {
      this.login = true;
    } else {
      alert('Username/Password errate!!');
    }
  } 
}
