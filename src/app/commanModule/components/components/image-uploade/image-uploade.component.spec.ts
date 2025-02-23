import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadeComponent } from './image-uploade.component';

describe('ImageUploadeComponent', () => {
  let component: ImageUploadeComponent;
  let fixture: ComponentFixture<ImageUploadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
