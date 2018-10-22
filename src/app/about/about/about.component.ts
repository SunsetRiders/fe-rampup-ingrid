import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private authenticated: boolean;
  constructor () {}

  changeTrue() {
    this.authenticated = true;
  }

  changeFalse() {
    this.authenticated = false;
  }
 }
