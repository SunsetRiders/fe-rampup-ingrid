import { Component } from '@angular/core';
import { AuthenticateService } from '../../core/services/authenticate/authenticate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public authenticatedd: boolean;

  constructor(authenticatedService: AuthenticateService) {
    this.authenticatedd = true;
  }

  changeStateAuthenticate() {
    this.authenticatedd = !this.authenticatedd;
    console.log(this.authenticatedd);
  }

}
