import { TestBed } from '@angular/core/testing';

import { ContactMeService } from './contact-me.service';

describe('ContactMeFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactMeService = TestBed.get(ContactMeService);
    expect(service).toBeTruthy();
  });
});
