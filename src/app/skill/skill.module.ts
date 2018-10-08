import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';

@NgModule({
  imports: [
    CommonModule,
    SkillRoutingModule
  ],
  declarations: [
    ProfessionalSkillsComponent
  ]
})
export class SkillModule { }
