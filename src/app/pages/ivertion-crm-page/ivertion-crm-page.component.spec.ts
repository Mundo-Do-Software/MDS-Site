import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvertionCrmPageComponent } from './ivertion-crm-page.component';

describe('IvertionCrmPageComponent', () => {
  let component: IvertionCrmPageComponent;
  let fixture: ComponentFixture<IvertionCrmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvertionCrmPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvertionCrmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
