import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleActionButtonComponent } from './globle-action-button.component';

describe('GlobleActionButtonComponent', () => {
  let component: GlobleActionButtonComponent;
  let fixture: ComponentFixture<GlobleActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
