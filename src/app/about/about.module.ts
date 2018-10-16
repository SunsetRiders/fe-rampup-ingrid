import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

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
