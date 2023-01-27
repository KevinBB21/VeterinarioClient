import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaNewAdminComponent } from './cita-new-admin.component';

describe('CitaNewAdminComponent', () => {
  let component: CitaNewAdminComponent;
  let fixture: ComponentFixture<CitaNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
