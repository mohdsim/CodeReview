import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementSignalComponent } from './implement-signal.component';

describe('ImplementSignalComponent', () => {
  let component: ImplementSignalComponent;
  let fixture: ComponentFixture<ImplementSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementSignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
