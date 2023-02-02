import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaRemoveAdminComponent } from './vacuna-remove-admin.component';

describe('VacunaRemoveAdminComponent', () => {
  let component: VacunaRemoveAdminComponent;
  let fixture: ComponentFixture<VacunaRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
