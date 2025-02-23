import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSizeWithCropeComponent } from './image-size-with-crope.component';

describe('ImageSizeWithCropeComponent', () => {
  let component: ImageSizeWithCropeComponent;
  let fixture: ComponentFixture<ImageSizeWithCropeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSizeWithCropeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSizeWithCropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
