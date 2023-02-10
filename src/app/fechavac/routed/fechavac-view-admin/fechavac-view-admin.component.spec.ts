import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacViewAdminComponent } from './fechavac-view-admin.component';

describe('FechavacViewAdminComponent', () => {
  let component: FechavacViewAdminComponent;
  let fixture: ComponentFixture<FechavacViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
