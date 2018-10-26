import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';
import { ProfileInfoType } from 'src/app/core/services/profile/profile-info-type';
import { ContactMeService } from '../../core/services/contact-me-form/contact-me.service';
import { ProfileService } from '../../core/services/profile/profile.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  profileInfo: ProfileInfo[] = [];

  constructor(
    profileService: ProfileService,
    private fb: FormBuilder,
    private contactMeService: ContactMeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { profile: ProfileInfo[] }) => {
      this.profileInfo = data.profile;
    });
  }

  isInfoAge(info: ProfileInfo) {
    return info.type === ProfileInfoType.Age;
  }

  onSubmit() {
    this.contactMeService.sendContent(this.contactForm.value);
  }
}
