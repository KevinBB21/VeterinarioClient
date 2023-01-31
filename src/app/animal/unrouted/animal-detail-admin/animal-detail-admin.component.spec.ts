import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailAdminComponent } from './animal-detail-admin.component';

describe('AnimalDetailAdminComponent', () => {
  let component: AnimalDetailAdminComponent;
  let fixture: ComponentFixture<AnimalDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalDetailAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
