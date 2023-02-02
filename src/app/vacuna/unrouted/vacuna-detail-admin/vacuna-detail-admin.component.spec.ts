import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaDetailAdminComponent } from './vacuna-detail-admin.component';

describe('VacunaDetailAdminComponent', () => {
  let component: VacunaDetailAdminComponent;
  let fixture: ComponentFixture<VacunaDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
