import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagetikVersionsComponent } from './tagetik-versions.component';

describe('TagetikVersionsComponent', () => {
  let component: TagetikVersionsComponent;
  let fixture: ComponentFixture<TagetikVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagetikVersionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagetikVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
