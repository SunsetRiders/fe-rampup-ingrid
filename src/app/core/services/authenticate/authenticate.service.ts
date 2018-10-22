import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  setTrue() {
    return true;
  }

  setFalse() {
    return false;
  }
}
