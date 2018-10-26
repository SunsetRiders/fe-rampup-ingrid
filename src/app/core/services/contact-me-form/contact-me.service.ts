import { Injectable } from '@angular/core';
import { ContactMeForm } from './contact-me-form';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor(private http: HttpClient) { }

  sendContent (formInfo: ContactMeForm) {
    console.log(formInfo);

    return console.log(this.http.post('http://localhost:3000/contact', formInfo)
    .subscribe(
      data => {
        console.log('Post Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    ));
  }

}
