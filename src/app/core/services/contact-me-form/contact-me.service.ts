import { Injectable } from '@angular/core';
import { ContactMeForm } from './contact-me-form';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor() { }

  sendContent (formInfo: ContactMeForm) {
    console.log(formInfo);
  }

}
