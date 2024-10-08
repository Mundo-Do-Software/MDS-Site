import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitleCenterComponent } from './section-title-center.component';

describe('SectionTitleCenterComponent', () => {
  let component: SectionTitleCenterComponent;
  let fixture: ComponentFixture<SectionTitleCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitleCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTitleCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
