import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeFinderAdminUnroutedComponent } from './usertype-finder-admin-unrouted.component';

describe('TipousuarioFinderAdminUnroutedComponent', () => {
  let component: UsertypeFinderAdminUnroutedComponent;
  let fixture: ComponentFixture<UsertypeFinderAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertypeFinderAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertypeFinderAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
