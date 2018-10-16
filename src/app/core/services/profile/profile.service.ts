import { Injectable } from '@angular/core';
import { ProfileInfo } from './profile-info';
import { ProfileInfoType } from './profile-info-type';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private info: ProfileInfo[] = [
    {name: 'E-mail', content: 'robertsmith@company.com', type: ProfileInfoType.Default, highlight: true },
    {name: 'Birthday', content: '1996-12-21T02:00:00.000Z', type: ProfileInfoType.Age, highlight: false},
    {name: 'Phone', content: '+1 256 243 84 56', type: ProfileInfoType.Default, highlight: false},
    {name: 'Viber', content: '+1 256 243 84 56', type: ProfileInfoType.Default, highlight: false},
    {name: 'Skype', content: 'robsmithcompany', type: ProfileInfoType.Default, highlight: false},
    {name: 'Adress', content: '24058, Belgium, Brussels, Liutte 27, BE', type: ProfileInfoType.Default, highlight: false},
    {name: 'Vacation', content: 'till March 25,2018', type: ProfileInfoType.Calendar, highlight: true}

  ];

  get userInfo(): ProfileInfo[] {
    return this.info;
  }
}
