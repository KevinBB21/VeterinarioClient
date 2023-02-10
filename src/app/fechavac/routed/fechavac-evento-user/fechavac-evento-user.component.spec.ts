import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechavacEventoUserComponent } from './fechavac-evento-user.component';

describe('FechavacEventoUserComponent', () => {
  let component: FechavacEventoUserComponent;
  let fixture: ComponentFixture<FechavacEventoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechavacEventoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechavacEventoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
