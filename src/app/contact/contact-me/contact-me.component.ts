import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';
import { ProfileService } from '../../core/services/profile/profile.service';
import { ProfileInfoType } from 'src/app/core/services/profile/profile-info-type';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  info: ProfileInfo[] = [];

  constructor(profileService: ProfileService) {
    this.info = profileService.userInfo;
   }

   isInfoAge(info: ProfileInfo) {
     return info.type === ProfileInfoType.Age;
   }
}
