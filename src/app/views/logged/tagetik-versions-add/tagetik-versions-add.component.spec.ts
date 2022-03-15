import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagetikVersionsAddComponent } from './tagetik-versions-add.component';

describe('TagetikVersionsAddComponent', () => {
  let component: TagetikVersionsAddComponent;
  let fixture: ComponentFixture<TagetikVersionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagetikVersionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagetikVersionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
