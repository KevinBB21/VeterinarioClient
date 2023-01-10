import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypePlistAdminComponent } from './usertype-plist-admin.component';

describe('UsertypePlistAdminComponent', () => {
  let component: UsertypePlistAdminComponent;
  let fixture: ComponentFixture<UsertypePlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertypePlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsertypePlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
