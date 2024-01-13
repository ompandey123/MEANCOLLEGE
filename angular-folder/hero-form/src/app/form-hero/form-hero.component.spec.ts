import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeroComponent } from './form-hero.component';

describe('FormHeroComponent', () => {
  let component: FormHeroComponent;
  let fixture: ComponentFixture<FormHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHeroComponent]
    });
    fixture = TestBed.createComponent(FormHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});