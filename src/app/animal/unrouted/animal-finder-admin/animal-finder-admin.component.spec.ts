import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFinderAdminComponent } from './animal-finder-admin.component';

describe('AnimalFinderAdminComponent', () => {
  let component: AnimalFinderAdminComponent;
  let fixture: ComponentFixture<AnimalFinderAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalFinderAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalFinderAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
