import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaFinderAdminComponent } from './vacuna-finder-admin.component';

describe('VacunaFinderAdminComponent', () => {
  let component: VacunaFinderAdminComponent;
  let fixture: ComponentFixture<VacunaFinderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaFinderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaFinderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
