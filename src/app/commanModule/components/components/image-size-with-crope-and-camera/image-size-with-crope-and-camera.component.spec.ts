import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSizeWithCropeAndCameraComponent } from './image-size-with-crope-and-camera.component';

describe('ImageSizeWithCropeAndCameraComponent', () => {
  let component: ImageSizeWithCropeAndCameraComponent;
  let fixture: ComponentFixture<ImageSizeWithCropeAndCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSizeWithCropeAndCameraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSizeWithCropeAndCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
