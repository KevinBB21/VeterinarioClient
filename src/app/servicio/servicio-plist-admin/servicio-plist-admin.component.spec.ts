import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioPlistAdminComponent } from './servicio-plist-admin.component';

describe('ServicioPlistAdminComponent', () => {
  let component: ServicioPlistAdminComponent;
  let fixture: ComponentFixture<ServicioPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
