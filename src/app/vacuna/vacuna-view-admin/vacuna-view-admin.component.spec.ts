import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaViewAdminComponent } from './vacuna-view-admin.component';

describe('VacunaViewAdminComponent', () => {
  let component: VacunaViewAdminComponent;
  let fixture: ComponentFixture<VacunaViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
