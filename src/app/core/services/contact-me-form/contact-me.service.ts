import { Injectable } from '@angular/core';
import { ContactMeForm } from './contact-me-form';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
  constructor() { }

  formValue (formInfo: ContactMeForm) {
    formInfo = formInfo;
    console.log(formInfo);
  }

}
