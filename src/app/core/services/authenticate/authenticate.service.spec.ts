import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticateService } from './authenticate.service';
import { Router } from '@angular/router';
import { ExpectedConditions } from 'protractor';

class MockRouter {
  navigate() {
    return null;
  }
}

describe('AuthenticateService', () => {
  let router: Router;
  let authenticateService: AuthenticateService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ],
    providers: [
      AuthenticateService,
      {
        provide: Router, useClass: MockRouter
      }
    ]
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    authenticateService = new AuthenticateService(router);

  });

  it('should be created', () => {
    const service: AuthenticateService = TestBed.get(AuthenticateService);
    expect(service).toBeTruthy();
  });

  it('should be return a boolean', () => {
    const service: AuthenticateService = TestBed.get(AuthenticateService);
    expect(service);
  });

  it('should have been called the method navigate in the method valueTrue', () => {
    const spy = spyOn(router, 'navigate');
    authenticateService.changeTrue();
    expect(spy).toHaveBeenCalled();
  });

  it('should have been called the method navigate in the method valueFalse', () => {
    const spy = spyOn(router, 'navigate');
    authenticateService.changeFalse();
    expect(spy).toHaveBeenCalled();
  });

  it('should not have been called the method navigate', () => {
    const spy = spyOn(router, 'navigate');
    authenticateService.getStatus();
    expect(spy).not.toHaveBeenCalled();
  });
});
