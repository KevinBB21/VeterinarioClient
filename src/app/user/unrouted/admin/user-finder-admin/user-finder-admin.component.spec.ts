import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinderAdminComponent } from './user-finder-admin.component';

describe('UserFinderAdminComponent', () => {
  let component: UserFinderAdminComponent;
  let fixture: ComponentFixture<UserFinderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFinderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFinderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
