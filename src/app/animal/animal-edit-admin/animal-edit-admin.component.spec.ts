import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEditAdminComponent } from './animal-edit-admin.component';

describe('AnimalEditAdminComponent', () => {
  let component: AnimalEditAdminComponent;
  let fixture: ComponentFixture<AnimalEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
