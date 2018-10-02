import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { DownloadResumeComponent } from './download-resume/download-resume.component';
import { ProfessionalSkillsComponent } from './professional-skills/professional-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfileComponent,
    DownloadResumeComponent,
    ProfessionalSkillsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
