import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioNewAdminComponent } from './servicio-new-admin.component';

describe('ServicioNewAdminComponent', () => {
  let component: ServicioNewAdminComponent;
  let fixture: ComponentFixture<ServicioNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
