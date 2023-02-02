import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaEditAdminComponent } from './vacuna-edit-admin.component';

describe('VacunaEditAdminComponent', () => {
  let component: VacunaEditAdminComponent;
  let fixture: ComponentFixture<VacunaEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
