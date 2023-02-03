import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacNewAdminComponent } from './fechavac-new-admin.component';

describe('FechavacNewAdminComponent', () => {
  let component: FechavacNewAdminComponent;
  let fixture: ComponentFixture<FechavacNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
