import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleFieldErrorComponent } from './globle-field-error.component';

describe('GlobleFieldErrorComponent', () => {
  let component: GlobleFieldErrorComponent;
  let fixture: ComponentFixture<GlobleFieldErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleFieldErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
