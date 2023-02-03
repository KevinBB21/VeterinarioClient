import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacDetailAdminComponent } from './fechavac-detail-admin.component';

describe('FechavacDetailAdminComponent', () => {
  let component: FechavacDetailAdminComponent;
  let fixture: ComponentFixture<FechavacDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
