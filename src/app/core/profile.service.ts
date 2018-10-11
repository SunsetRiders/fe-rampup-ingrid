import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private birthday = new Date('21/12/1996');
  private info = [{name: 'E-mail', content: 'robertsmith@company.com' }, //{name: 'brithday', content: this.birthday.toISOString()},
                  {name: 'Phone', content: '+1 256 243 84 56'},
                  {name: 'Viber', content: '+1 256 243 84 56'},
                  {name: 'Skype', content: 'robsmithcompany'},
                  {name: 'Adress', content: '24058, Belgium, Brussels, Liutte 27, BE'}];

  constructor() { }

  get userInfo() {
    return this.info;
  }
}
