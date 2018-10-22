import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service';

 @Injectable({
  providedIn: 'root'
})
 export class GuardService implements CanActivate {
   private isAuthenticated: boolean;

   constructor(private authemticateService: AuthenticateService) {
     this.isAuthenticated = this.authemticateService.getStatus();
    console.log(`isAuthenticated = ${this.isAuthenticated}`);
  }

   canActivate(): boolean {
    return this.isAuthenticated;
  }
}
