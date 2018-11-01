import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { ProfileComponent } from '../profile/profile.component';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, ProfileComponent, AgePipe ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
