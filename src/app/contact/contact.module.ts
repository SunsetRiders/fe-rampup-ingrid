import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [
    ContactMeComponent,
  ]
})
export class ContactModule { }
