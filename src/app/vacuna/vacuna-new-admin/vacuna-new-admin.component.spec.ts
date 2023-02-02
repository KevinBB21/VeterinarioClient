import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaNewAdminComponent } from './vacuna-new-admin.component';

describe('VacunaNewAdminComponent', () => {
  let component: VacunaNewAdminComponent;
  let fixture: ComponentFixture<VacunaNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
