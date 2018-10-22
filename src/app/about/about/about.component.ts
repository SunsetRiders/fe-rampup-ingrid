import { Component } from '@angular/core';
import { AuthenticateService } from '../../core/services/authenticate/authenticate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public authenticated: boolean;

  constructor(private authenticatedService: AuthenticateService ) {
    this.authenticated = true;
  }

  changeStateAuthenticate() {
    this.authenticated = this.authenticatedService.changeStateAuthenticate(this.authenticated);
  }

}
