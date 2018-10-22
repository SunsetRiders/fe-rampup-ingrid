import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private authenticated = false;
  constructor () {}

  changeTrue() {
    this.authenticated = true;
    console.log(this.authenticated);
  }

  changeFalse() {
    this.authenticated = false;
    console.log(this.authenticated);
  }

  getStatus(): boolean {
    return this.authenticated;
  }
}
