import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacFormUserComponent } from './fechavac-form-user.component';

describe('FechavacFormUserComponent', () => {
  let component: FechavacFormUserComponent;
  let fixture: ComponentFixture<FechavacFormUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacFormUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacFormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
