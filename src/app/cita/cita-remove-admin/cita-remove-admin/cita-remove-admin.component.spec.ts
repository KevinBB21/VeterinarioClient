import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaRemoveAdminComponent } from './cita-remove-admin.component';

describe('CitaRemoveAdminComponent', () => {
  let component: CitaRemoveAdminComponent;
  let fixture: ComponentFixture<CitaRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
