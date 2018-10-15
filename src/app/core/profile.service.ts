import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private info = [{name: 'E-mail', content: 'robertsmith@company.com' },
                  {name: 'Brithday', content: '1996-12-21T02:00:00.000Z'},
                  {name: 'Phone', content: '+1 256 243 84 56'},
                  {name: 'Viber', content: '+1 256 243 84 56'},
                  {name: 'Skype', content: 'robsmithcompany'},
                  {name: 'Adress', content: '24058, Belgium, Brussels, Liutte 27, BE'}];

  private teste = [{birthday: '1996-12-21T02:00:00.000Z' ,
                   email: 'robertsmith@company.com',
                   Phone: '+1 256 243 84 56',
                   Viber: '+1 256 243 84 56',
                   Skype: 'robsmithcompany',
                   Adress: '24058, Belgium, Brussels, Liutte 27, BE'}];

  private birthdayy = '1996-12-21T02:00:00.000Z';

  constructor() { }

  get userInfo() {
    return this.info;
  }

  get userTeste() {
    return this.teste;
  }

  get birthday() {
    return this.birthdayy;
  }

}
