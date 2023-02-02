import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaPlistAdminComponent } from './vacuna-plist-admin.component';

describe('VacunaPlistAdminComponent', () => {
  let component: VacunaPlistAdminComponent;
  let fixture: ComponentFixture<VacunaPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacunaPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacunaPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
