import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticateService } from '../authenticate/authenticate.service';

 @Injectable({
  providedIn: 'root'
})
 export class GuardService implements CanActivate {
   private isAuthenticated: boolean;

   constructor(private authemticateService: AuthenticateService, private router: Router) {
  }

   canActivate(): boolean {
    this.isAuthenticated = this.authemticateService.getStatus();

     if (this.isAuthenticated) {
      return this.isAuthenticated;
    } else {
      this.router.navigate(['/page-not-found']);
      return this.isAuthenticated; }
  }
}
