import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

 @Injectable({
  providedIn: 'root'
})
 export class GuardService implements CanActivate {
   private isAuthenticated: boolean;

   constructor() {
    this.isAuthenticated = true;
    console.log(`isAuthenticated = ${this.isAuthenticated}`);
  }

   canActivate(): boolean  {
    return this.isAuthenticated;
  }
}
