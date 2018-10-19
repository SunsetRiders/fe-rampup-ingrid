import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about/about.component';
import { AuthGuardService } from './guards/auth-guard/auth-guard.service';
import { AuthGuardChildService } from './guards/auth-guard-child/auth-guard-child.service';
import { AuthGuardLoadService } from './guards/auth-guard-load/auth-guard-load.service';

const routes: Routes = [
  { path: 'skill', loadChildren: './skill/skill.module#SkillModule', canActivate: [AuthGuardService]},
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, }
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
