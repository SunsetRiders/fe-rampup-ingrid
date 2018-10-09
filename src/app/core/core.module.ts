import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProfileComponent } from '../profile/profile.component';
import { ContactMeComponent } from '../contact/contact-me/contact-me.component';
import { ProfileService } from './profile.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ProfileComponent, ContactMeComponent ],
  exports: [],
  providers: [ ProfileService ]
})
export class CoreModule { }
