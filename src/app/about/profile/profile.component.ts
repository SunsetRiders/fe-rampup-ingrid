import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';
import { ProfileService } from '../../core/services/profile/profile.service';
import { ProfileInfoType } from 'src/app/core/services/profile/profile-info-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  info: ProfileInfo[] = [];

  constructor(profileService: ProfileService, private route: ActivatedRoute) { }

   isInfoAge(info: ProfileInfo) {
     return info.type === ProfileInfoType.Age;
   }

   isInfoCalendar(info: ProfileInfo) {
    return info.type === ProfileInfoType.Calendar;
  }

  ngOnInit() {
    this.route.data.subscribe((data: { profile: ProfileInfo[] }) => {
      this.info = data.profile;
    });
  }
}
