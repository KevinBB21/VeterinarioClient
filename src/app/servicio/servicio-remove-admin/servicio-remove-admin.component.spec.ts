import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioRemoveAdminComponent } from './servicio-remove-admin.component';

describe('ServicioRemoveAdminComponent', () => {
  let component: ServicioRemoveAdminComponent;
  let fixture: ComponentFixture<ServicioRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
