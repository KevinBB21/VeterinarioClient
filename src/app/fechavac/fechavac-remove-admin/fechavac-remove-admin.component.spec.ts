import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacRemoveAdminComponent } from './fechavac-remove-admin.component';

describe('FechavacRemoveAdminComponent', () => {
  let component: FechavacRemoveAdminComponent;
  let fixture: ComponentFixture<FechavacRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
