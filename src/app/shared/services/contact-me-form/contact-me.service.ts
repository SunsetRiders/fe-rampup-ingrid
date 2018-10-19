import { Injectable } from '@angular/core';
import { ContactMeForm } from './contact-me-form';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  private formInfo: ContactMeForm;
  constructor() { }

  formValue (formInfo: ContactMeForm) {
    this.formInfo = formInfo;
    console.log(this.formInfo);
  }

}
