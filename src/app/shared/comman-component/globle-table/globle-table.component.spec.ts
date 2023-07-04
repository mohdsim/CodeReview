import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleTableComponent } from './globle-table.component';

describe('GlobleTableComponent', () => {
  let component: GlobleTableComponent;
  let fixture: ComponentFixture<GlobleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
