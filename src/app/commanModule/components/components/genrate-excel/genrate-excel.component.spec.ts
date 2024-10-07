import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrateExcelComponent } from './genrate-excel.component';

describe('GenrateExcelComponent', () => {
  let component: GenrateExcelComponent;
  let fixture: ComponentFixture<GenrateExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrateExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrateExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
