import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacPlistAdminComponent } from './fechavac-plist-admin.component';

describe('FechavacPlistAdminComponent', () => {
  let component: FechavacPlistAdminComponent;
  let fixture: ComponentFixture<FechavacPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
