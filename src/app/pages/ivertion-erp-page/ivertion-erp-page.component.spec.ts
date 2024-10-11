import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvertionErpPageComponent } from './ivertion-erp-page.component';

describe('IvertionErpPageComponent', () => {
  let component: IvertionErpPageComponent;
  let fixture: ComponentFixture<IvertionErpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvertionErpPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvertionErpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
