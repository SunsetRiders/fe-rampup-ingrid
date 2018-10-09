import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ProfileComponent ],
  declarations: [ ProfileComponent ],
  providers: [ ]
})
export class AboutModule { }
