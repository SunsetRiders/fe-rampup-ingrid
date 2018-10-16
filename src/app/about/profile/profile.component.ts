import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  info = [];

  constructor(profileService: ProfileService) {
    this.info = profileService.userInfo;
   }
}
