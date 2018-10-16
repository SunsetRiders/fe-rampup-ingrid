import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ ],
  declarations: [ ProfileComponent, AboutComponent],
  providers: [ ]
})
export class AboutModule { }
