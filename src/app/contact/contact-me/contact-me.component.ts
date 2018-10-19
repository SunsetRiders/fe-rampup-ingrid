import { Component, OnInit } from '@angular/core';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';
import { ProfileService } from '../../core/services/profile/profile.service';
import { ProfileInfoType } from 'src/app/core/services/profile/profile-info-type';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactMeService } from '../../core/services/contact-me-form/contact-me.service';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  info: ProfileInfo[] = [];

  constructor(profileService: ProfileService, private fb: FormBuilder, private contactMeService: ContactMeService) {
    this.info = profileService.userInfo;
   }

   isInfoAge(info: ProfileInfo) {
     return info.type === ProfileInfoType.Age;
   }

   onSubmit() {
    this.contactMeService.formValue(this.contactForm.value);
   }

   showFormValue() {
    console.log(this.contactForm.value);
   }
}
