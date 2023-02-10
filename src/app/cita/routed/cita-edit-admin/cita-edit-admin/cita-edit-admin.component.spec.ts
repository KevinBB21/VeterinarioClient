import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaEditAdminComponent } from './cita-edit-admin.component';

describe('CitaEditAdminComponent', () => {
  let component: CitaEditAdminComponent;
  let fixture: ComponentFixture<CitaEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
