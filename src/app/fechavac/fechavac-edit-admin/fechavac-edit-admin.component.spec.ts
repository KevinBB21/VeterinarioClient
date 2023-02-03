import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacEditAdminComponent } from './fechavac-edit-admin.component';

describe('FechavacEditAdminComponent', () => {
  let component: FechavacEditAdminComponent;
  let fixture: ComponentFixture<FechavacEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
