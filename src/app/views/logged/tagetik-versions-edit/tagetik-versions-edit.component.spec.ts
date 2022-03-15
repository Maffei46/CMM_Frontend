import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagetikVersionsEditComponent } from './tagetik-versions-edit.component';

describe('TagetikVersionsEditComponent', () => {
  let component: TagetikVersionsEditComponent;
  let fixture: ComponentFixture<TagetikVersionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagetikVersionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagetikVersionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
