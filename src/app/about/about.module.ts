import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { GuardService } from '../core/services/guard/guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ ],
  declarations: [ ProfileComponent, AboutComponent],
  providers: [ GuardService ]
})
export class AboutModule { }
