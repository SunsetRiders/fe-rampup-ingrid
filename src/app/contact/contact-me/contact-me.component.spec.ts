import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeComponent } from './contact-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeComponent, AgePipe],
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
