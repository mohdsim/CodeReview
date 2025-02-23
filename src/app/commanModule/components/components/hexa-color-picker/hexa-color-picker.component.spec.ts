import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexaColorPickerComponent } from './hexa-color-picker.component';

describe('HexaColorPickerComponent', () => {
  let component: HexaColorPickerComponent;
  let fixture: ComponentFixture<HexaColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexaColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexaColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
