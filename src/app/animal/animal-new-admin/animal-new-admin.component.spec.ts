import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalNewAdminComponent } from './animal-new-admin.component';

describe('AnimalNewAdminComponent', () => {
  let component: AnimalNewAdminComponent;
  let fixture: ComponentFixture<AnimalNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
