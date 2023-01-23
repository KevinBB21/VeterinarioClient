import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposervicioFinderAdminComponent } from './tiposervicio-finder-admin.component';

describe('TiposervicioFinderAdminComponent', () => {
  let component: TiposervicioFinderAdminComponent;
  let fixture: ComponentFixture<TiposervicioFinderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposervicioFinderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposervicioFinderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
