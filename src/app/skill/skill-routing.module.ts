import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';

const routes: Routes = [
  {path: '', component: ProfessionalSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
