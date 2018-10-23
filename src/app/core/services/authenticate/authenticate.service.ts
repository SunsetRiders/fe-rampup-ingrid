import { Injectable } from '@angular/core';
import { GuardService } from '../guard/guard.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private authenticated = true;
  constructor (private router: Router) {}

  changeTrue() {
    this.authenticated = true;
    console.log(this.authenticated);
    this.router.navigate(['/skill']);
  }

  changeFalse() {
    this.authenticated = false;
    console.log(this.authenticated);
    this.router.navigate(['/page-not-found']);
  }

  getStatus(): boolean {
    return this.authenticated;
  }
}
