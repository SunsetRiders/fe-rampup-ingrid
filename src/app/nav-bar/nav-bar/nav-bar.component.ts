import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../core/services/authenticate/authenticate.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public authenticate: AuthenticateService) { }

  ngOnInit() {
  }

}
