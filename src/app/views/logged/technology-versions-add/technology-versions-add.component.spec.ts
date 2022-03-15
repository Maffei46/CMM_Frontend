import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyVersionsAddComponent } from './technology-versions-add.component';

describe('TechnologyVersionsAddComponent', () => {
  let component: TechnologyVersionsAddComponent;
  let fixture: ComponentFixture<TechnologyVersionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyVersionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyVersionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
