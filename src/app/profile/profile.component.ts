import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../core/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  info = [];
  constructor(profileService: ProfileService) {
    this.info = profileService.userInfo;
   }

  ngOnInit() {
  }

}
