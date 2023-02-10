import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaViewAdminComponent } from './cita-view-admin.component';

describe('CitaViewAdminComponent', () => {
  let component: CitaViewAdminComponent;
  let fixture: ComponentFixture<CitaViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
