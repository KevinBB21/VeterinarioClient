import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDetailAdminComponent } from './servicio-detail-admin.component';

describe('ServicioDetailAdminComponent', () => {
  let component: ServicioDetailAdminComponent;
  let fixture: ComponentFixture<ServicioDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
