import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { DownloadResumeComponent } from './download-resume/download-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProfileComponent,
    DownloadResumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
