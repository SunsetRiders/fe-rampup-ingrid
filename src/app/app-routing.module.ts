import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about/about.component';
import { GuardService } from './core/services/guard/guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'skill', loadChildren: './skill/skill.module#SkillModule', canActivate: [GuardService]},
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule'},
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full'},
  { path: 'page-not-found', component: PageNotFoundComponent}
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
