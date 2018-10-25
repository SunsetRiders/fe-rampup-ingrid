import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GuardService } from './core/services/guard/guard.service';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';


@NgModule({
  declarations: [ AppComponent, NavBarComponent, PageNotFoundComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ GuardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
