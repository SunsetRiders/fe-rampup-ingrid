import { Injectable } from '@angular/core';
import { ProfileInfo } from './profile-info';
import { ProfileInfoType } from './profile-info-type';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private info: ProfileInfo[] = [
    {name: 'E-mail', content: 'robertsmith@company.com', type: ProfileInfoType.Default },
    {name: 'Birthday', content: '1996-12-21T02:00:00.000Z', type: ProfileInfoType.Age},
    {name: 'Phone', content: '+1 256 243 84 56', type: ProfileInfoType.Default},
    {name: 'Viber', content: '+1 256 243 84 56', type: ProfileInfoType.Default},
    {name: 'Skype', content: 'robsmithcompany', type: ProfileInfoType.Default},
    {name: 'Adress', content: '24058, Belgium, Brussels, Liutte 27, BE', type: ProfileInfoType.Default}
  ];

  get userInfo(): ProfileInfo[] {
    return this.info;
  }
}
