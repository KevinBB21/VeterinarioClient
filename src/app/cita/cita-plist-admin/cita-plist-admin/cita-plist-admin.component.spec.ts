import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaPlistAdminComponent } from './cita-plist-admin.component';

describe('CitaPlistAdminComponent', () => {
  let component: CitaPlistAdminComponent;
  let fixture: ComponentFixture<CitaPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
