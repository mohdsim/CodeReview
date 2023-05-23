import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClobleFormComponent } from './cloble-form.component';

describe('ClobleFormComponent', () => {
  let component: ClobleFormComponent;
  let fixture: ComponentFixture<ClobleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClobleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClobleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
