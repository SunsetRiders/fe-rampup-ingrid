import { Component } from '@angular/core';
import { AuthenticateService } from '../../core/services/authenticate/authenticate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private authenticated: boolean;

  constructor(public authenticatedService: AuthenticateService ) {
    this.authenticated = true;
  }

  changeStateAuthenticate() {
    //this.authenticatedService.changeStateAuthenticate(this.authenticated);
  }

}
