import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaDetailAdminComponent } from './cita-detail-admin.component';

describe('CitaDetailAdminComponent', () => {
  let component: CitaDetailAdminComponent;
  let fixture: ComponentFixture<CitaDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
