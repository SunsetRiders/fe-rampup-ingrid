import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AgePipe ],
  exports: [ AgePipe ]
})
export class SharedModule { }
