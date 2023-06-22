import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFileUplodeComponent } from './multi-file-uplode.component';

describe('MultiFileUplodeComponent', () => {
  let component: MultiFileUplodeComponent;
  let fixture: ComponentFixture<MultiFileUplodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiFileUplodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFileUplodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
