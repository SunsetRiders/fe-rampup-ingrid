import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/core/services/authenticate/authenticate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private authenticated: boolean;

  constructor (private authenticateService: AuthenticateService) {}

  changeTrue() {
    this.authenticated = this.authenticateService.setTrue();

  }

  changeFalse() {
    this.authenticated = this.authenticateService.setFalse();
  }
 }
