import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOverlayBackgroundComponent } from './image-overlay-background.component';

describe('ImageOverlayBackgroundComponent', () => {
  let component: ImageOverlayBackgroundComponent;
  let fixture: ComponentFixture<ImageOverlayBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageOverlayBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOverlayBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
