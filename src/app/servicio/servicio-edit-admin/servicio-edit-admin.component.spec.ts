import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioEditAdminComponent } from './servicio-edit-admin.component';

describe('ServicioEditAdminComponent', () => {
  let component: ServicioEditAdminComponent;
  let fixture: ComponentFixture<ServicioEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
