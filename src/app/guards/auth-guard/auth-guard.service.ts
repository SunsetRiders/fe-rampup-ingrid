import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AboutComponent } from 'src/app/about/about/about.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  private isAuthenticated: boolean;

  constructor(private about: AboutComponent) {
    this.isAuthenticated = about.authenticated;
    console.log(`AuthGuard isAuthenticated = ${this.isAuthenticated}`);
  }

  canActivate(): boolean {
    return this.isAuthenticated;
  }
}
