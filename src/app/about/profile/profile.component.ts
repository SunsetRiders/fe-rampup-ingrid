import { Component } from '@angular/core';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';
import { ProfileService } from '../../core/services/profile/profile.service';
import { ProfileInfoType } from 'src/app/core/services/profile/profile-info-type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  info: ProfileInfo[] = [];

  constructor(profileService: ProfileService) {
    this.info = profileService.userInfo;
   }

   isInfoAge(info: ProfileInfo) {
     return info.type === ProfileInfoType.Age;
   }
}
