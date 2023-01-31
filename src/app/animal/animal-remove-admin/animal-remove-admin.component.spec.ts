import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRemoveAdminComponent } from './animal-remove-admin.component';

describe('AnimalRemoveAdminComponent', () => {
  let component: AnimalRemoveAdminComponent;
  let fixture: ComponentFixture<AnimalRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
