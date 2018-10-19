import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoadService implements CanLoad {

  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = true;
    console.log(`AuthGuardLoad isAuthenticated = ${this.isAuthenticated}`);
   }

   canLoad(): boolean {
    return this.isAuthenticated;
   }
}
