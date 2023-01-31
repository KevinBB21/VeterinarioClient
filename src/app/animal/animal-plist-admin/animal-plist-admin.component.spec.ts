import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPlistAdminComponent } from './animal-plist-admin.component';

describe('AnimalPlistAdminComponent', () => {
  let component: AnimalPlistAdminComponent;
  let fixture: ComponentFixture<AnimalPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
