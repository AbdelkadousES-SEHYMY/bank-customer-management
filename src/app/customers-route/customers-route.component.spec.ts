import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRouteComponent } from './customers-route.component';

describe('CustomersRouteComponent', () => {
  let component: CustomersRouteComponent;
  let fixture: ComponentFixture<CustomersRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
