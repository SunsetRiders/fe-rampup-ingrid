import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';
import { ProfileService } from '../../core/services/profile/profile.service';
import { ProfileInfoType } from 'src/app/core/services/profile/profile-info-type';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: [''],
    message: ['']
  });

  info: ProfileInfo[] = [];

  constructor(profileService: ProfileService, private fb: FormBuilder) {
    this.info = profileService.userInfo;
   }

   isInfoAge(info: ProfileInfo) {
     return info.type === ProfileInfoType.Age;
   }

   onSubmit() {
     console.log(this.contactForm.value);
   }

   onClick() {
    console.log(this.contactForm.value);
   }
}
