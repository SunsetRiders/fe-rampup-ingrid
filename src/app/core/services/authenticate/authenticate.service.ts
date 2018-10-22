import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public authenticateStatus: boolean;
  constructor() {
    this.authenticateStatus = true;
  }

  public changeStateAuthenticate(autenticate: boolean): boolean {
    autenticate = !autenticate;
    console.log(`AuthenticateService: authenticated = ${autenticate}`);
    return autenticate;
  }

  statusAuthenticate() {
    return this.authenticateStatus;
  }
}
