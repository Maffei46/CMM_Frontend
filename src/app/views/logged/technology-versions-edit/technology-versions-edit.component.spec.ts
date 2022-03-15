import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyVersionsEditComponent } from './technology-versions-edit.component';

describe('TechnologyVersionsEditComponent', () => {
  let component: TechnologyVersionsEditComponent;
  let fixture: ComponentFixture<TechnologyVersionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyVersionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyVersionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
