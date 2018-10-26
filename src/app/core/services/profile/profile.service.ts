import { Injectable } from '@angular/core';
import { ProfileInfo } from './profile-info';
import { ProfileInfoType } from './profile-info-type';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getUserInfoFromBackEnd(): Observable<ProfileInfo[]> {
    const url = 'http://localhost:3000/profile';
    return this.http.get<ProfileInfo[]>(url);
  }
}
