import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoanimalFinderAdminComponent } from './tipoanimal-finder-admin.component';

describe('TipoanimalFinderAdminComponent', () => {
  let component: TipoanimalFinderAdminComponent;
  let fixture: ComponentFixture<TipoanimalFinderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoanimalFinderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoanimalFinderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
