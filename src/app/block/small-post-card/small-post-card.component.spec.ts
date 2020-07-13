import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPostCardComponent } from './small-post-card.component';

describe('SmallPostCardComponent', () => {
  let component: SmallPostCardComponent;
  let fixture: ComponentFixture<SmallPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
