import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/profile.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  info = [ ];
  teste = {};
  birthday = null;

  constructor(profileService: ProfileService) {
    this.info = profileService.userInfo;
    console.log(this.info);

    this.teste = profileService.userTeste;
    console.log(this.teste);
    console.log(Object.getOwnPropertyNames(this.teste));

    for (const prop in this.teste) {
      if (this.teste.hasOwnProperty(prop)) {
        console.log(prop);
      }
    }

    this.birthday = profileService.birthday;
   }

  ngOnInit() {
  }

}
