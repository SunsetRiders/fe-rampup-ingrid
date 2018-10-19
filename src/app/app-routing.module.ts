import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about/about.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'skill', loadChildren: './skill/skill.module#SkillModule'},
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
