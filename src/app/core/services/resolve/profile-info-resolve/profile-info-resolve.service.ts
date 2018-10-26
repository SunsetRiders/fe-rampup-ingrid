import { Injectable } from '@angular/core';
import { ProfileService } from '../../profile/profile.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileInfo } from '../../profile/profile-info';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoResolveService implements Resolve<ProfileInfo[]> {

  constructor(private profileService: ProfileService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProfileInfo[]> {
    return this.profileService.getUserInfoFromBackEnd();
  }
}
