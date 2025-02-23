import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOperationComponent } from './images-operation.component';

describe('ImagesOperationComponent', () => {
  let component: ImagesOperationComponent;
  let fixture: ComponentFixture<ImagesOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
