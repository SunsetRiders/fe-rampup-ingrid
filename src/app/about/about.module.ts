import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from '../guards/auth-guard/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ ],
  declarations: [ ProfileComponent, AboutComponent],
  providers: [ AuthGuardService ]
})
export class AboutModule { }
