import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSizeValidationComponent } from './image-size-validation.component';

describe('ImageSizeValidationComponent', () => {
  let component: ImageSizeValidationComponent;
  let fixture: ComponentFixture<ImageSizeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSizeValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSizeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
