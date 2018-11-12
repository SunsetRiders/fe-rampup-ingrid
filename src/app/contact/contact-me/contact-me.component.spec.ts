import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeComponent } from './contact-me.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgePipe } from 'src/app/shared/pipes/age.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let pipe: AgePipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMeComponent, AgePipe],
      imports: [ ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule ],
      providers: [ ContactMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;

    pipe = new AgePipe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid because have 4 fields setValue (none)', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['subject'].setValue('');
    component.contactForm.controls['message'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should form be invalid because have 1 field (name) setValue (none)', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('Ingrid@ingrid.com');
    component.contactForm.controls['subject'].setValue('oii');
    component.contactForm.controls['message'].setValue('jj');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should form be invalid because have 1 field (e-mail) setValue (none)', () => {
    component.contactForm.controls['name'].setValue('Ingrid');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['subject'].setValue('oii');
    component.contactForm.controls['message'].setValue('dd');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should form be invalid because have 1 field (subject) setValue (none)', () => {
    component.contactForm.controls['name'].setValue('Ingrid');
    component.contactForm.controls['email'].setValue('Ingrid@ingrid.com');
    component.contactForm.controls['subject'].setValue('');
    component.contactForm.controls['message'].setValue('d');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should form be invalid because have 1 field (message) setValue (none)', () => {
    component.contactForm.controls['name'].setValue('Ingrid');
    component.contactForm.controls['email'].setValue('Ingrid@ingrid.com');
    component.contactForm.controls['subject'].setValue('oii');
    component.contactForm.controls['message'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should form be invalid because have 2 fields (name email) setValue (none)', () => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['subject'].setValue('oii');
    component.contactForm.controls['message'].setValue('ddd');
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should form be valid', () => {
    component.contactForm.controls['name'].setValue('ingrid');
    component.contactForm.controls['email'].setValue('ingrid@d.com');
    component.contactForm.controls['subject'].setValue('oii');
    component.contactForm.controls['message'].setValue('ddd');
    expect(component.contactForm.valid).toBe(true);
  });

});
