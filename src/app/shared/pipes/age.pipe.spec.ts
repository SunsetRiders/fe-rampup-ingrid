import { AgePipe } from './age.pipe';
import { TestBed } from '@angular/core/testing';

describe('AgePipe', () => {
  let agePipe: AgePipe;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ ],
    providers: [ AgePipe ]
  }));

  beforeEach(() => {
    agePipe = TestBed.get(AgePipe);
  });

  it('create an instance', () => {
    const pipe = new AgePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 22', () => {
    const age = agePipe.transform('1996-12-21T02:00:00.000Z');
    expect(age).toEqual(22);
  });

  it('should return 32', () => {
    const age = agePipe.transform('1986-12-21T02:00:00.000Z');
    expect(age).toEqual(32);
  });
});
