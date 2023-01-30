import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioFinderAdminComponent } from './servicio-finder-admin.component';

describe('ServicioFinderAdminComponent', () => {
  let component: ServicioFinderAdminComponent;
  let fixture: ComponentFixture<ServicioFinderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioFinderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioFinderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
