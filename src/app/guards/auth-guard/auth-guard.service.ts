import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = true;
    console.log(`AuthGuard isAuthenticated = ${this.isAuthenticated}`);
  }

  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
