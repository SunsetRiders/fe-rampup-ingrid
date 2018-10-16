import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profile/profile.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  info = [ ];

  constructor(profileService: ProfileService) {
    this.info = profileService.userInfo;
    console.log(this.info);
   }

  ngOnInit() {
  }

}
