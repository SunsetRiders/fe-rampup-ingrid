import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';
import { SkillRoutingModule } from './skill-routing.module';


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
