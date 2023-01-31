import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalViewAdminComponent } from './animal-view-admin.component';

describe('AnimalViewAdminComponent', () => {
  let component: AnimalViewAdminComponent;
  let fixture: ComponentFixture<AnimalViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
