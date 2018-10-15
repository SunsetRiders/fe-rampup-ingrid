import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './age.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AgePipe ],
  exports: [ AgePipe ]
})

@Injectable({
  providedIn: 'root'
})
export class SharedModule {
  age = new Date();

}
