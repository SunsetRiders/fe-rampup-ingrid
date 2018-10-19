import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public authenticated: boolean;
  constructor() {
    this.authenticated = true;
  }

  public changeStateAuthenticate() {
    this.authenticated = !this.authenticated;
    console.log(`AuthenticateService: authenticated = ${this.authenticated}`);
  }
}
