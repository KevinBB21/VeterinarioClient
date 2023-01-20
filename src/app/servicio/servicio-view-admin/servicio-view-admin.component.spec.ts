import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioViewAdminComponent } from './servicio-view-admin.component';

describe('ServicioViewAdminComponent', () => {
  let component: ServicioViewAdminComponent;
  let fixture: ComponentFixture<ServicioViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
