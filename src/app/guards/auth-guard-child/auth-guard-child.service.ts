import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChildService implements CanActivateChild {

  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = true;
    console.log(`AuthGuardChild isAuthendicated = ${this.isAuthenticated}`);
  }

  canActivateChild(): boolean {
    return this.isAuthenticated;
  }
}
