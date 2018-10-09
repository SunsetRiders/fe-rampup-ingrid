import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  info = [{name: 'E-mail', content: 'robertsmith@company.com' },
          {name: 'Phone', content: '+1 256 243 84 56'},
          {name: 'Viber', content: '+1 256 243 84 56'},
          {name: 'Skype', content: 'robsmithcompany'},
          {name: 'Adress', content: '24058, Belgium, Brussels, Liutte 27, BE'}];

  constructor() { }

  get userInfo() {
    return this.info;
  }
}
