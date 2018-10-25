import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProfileInfoResolveService } from '../core/services/resolve/profile-info-resolve/profile-info-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: ContactMeComponent,
    resolve: { profile: ProfileInfoResolveService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
