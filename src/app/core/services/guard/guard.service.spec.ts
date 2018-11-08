import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GuardService } from './guard.service';
import { Component } from '@angular/core';
import { AuthenticateService } from '../authenticate/authenticate.service';
import { Routes, Router } from '@angular/router';

class MockRouter {
  navigate() {
    return null;
  }
}


describe('GuardService', () => {
  let guardService: GuardService;
  let authenticateService: AuthenticateService;
  let router: Router;
  let guardServiceInstance: GuardService;
  // const testRoutes: Routes = [
  //   {path: '', component: HomeComponent},
  //   {path: 'a', component: AComponent, canActivate: [ GuardService ]},
  //   {path: '**', component: NotFoundComponent}
  // ];

  beforeEach(() => TestBed.configureTestingModule({
    // imports: [ RouterTestingModule.withRoutes( testRoutes )],
    providers: [
      AuthenticateService,
      {
        provide: Router, useClass: MockRouter
      },
      GuardService
    ]
  }));

  beforeEach(() => {
    authenticateService = TestBed.get(AuthenticateService);
    guardService = TestBed.get(GuardService);
    router = TestBed.get(Router);
    guardServiceInstance = new GuardService(authenticateService, router);
  });

  it('should be created', () => {
    const service: GuardService = TestBed.get(GuardService);
    expect(service).toBeTruthy();
  });

  it('should the method canActivate have been called', () => {
    const spy = spyOn(guardService, 'canActivate').and.callThrough();
    guardService.canActivate();
    expect(spy).toHaveBeenCalled();
  });

  it('should return false when the user is not authenticated', () => {
    const spy = spyOn(authenticateService, 'getStatus').and.returnValue(false);
    expect(authenticateService.getStatus()).toBe(false);
  });

  it('should when the method canActivate return false', () => {
    const spy = spyOn(guardService, 'canActivate').and.returnValue(false);
    expect(guardService.canActivate()).toBe(false);
  });

  it('should not have been called the method navigate', () => {
    const spy = spyOn(router, 'navigate');
    guardServiceInstance.canActivate();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should have been called the method navigate', () => {
    const spy = spyOn(router, 'navigate');
    authenticateService.changeFalse();
    guardServiceInstance.canActivate();
    expect(spy).toHaveBeenCalled();
  });

  it('should have been called the method getStatus', () => {
    const spy = spyOn(authenticateService, 'getStatus');
    guardServiceInstance = new GuardService(authenticateService, router);
    expect(spy).toHaveBeenCalled();
  });
});
