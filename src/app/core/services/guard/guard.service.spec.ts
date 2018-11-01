import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GuardService } from './guard.service';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule ],

  }));

  it('should be created', () => {
    const service: GuardService = TestBed.get(GuardService);
    expect(service).toBeTruthy();
  });
});
