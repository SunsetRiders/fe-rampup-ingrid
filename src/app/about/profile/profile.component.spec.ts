import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileInfo } from 'src/app/core/services/profile/profile-info';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let profileComponent: ProfileComponent;
  let profileInfo: ProfileInfo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, AgePipe ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    profileComponent = TestBed.get(ProfileComponent);

  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have been called method isInfoAge', () => {
    const spy = spyOn(profileComponent, 'isInfoAge');
    profileComponent.isInfoAge(profileInfo);
    expect(spy).toHaveBeenCalled();
  });

  it('should have been called method isInfoCalendar', () => {
    const spy = spyOn(profileComponent, 'isInfoCalendar');
    profileComponent.isInfoCalendar(profileInfo);
    expect(spy).toHaveBeenCalled();
  });

  it('should have been called method ngOnInit', () => {
    const spy = spyOn(profileComponent, 'ngOnInit');
    profileComponent.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
