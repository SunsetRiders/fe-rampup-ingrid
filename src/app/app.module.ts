import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ AuthGuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
