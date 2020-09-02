import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridCardComponent } from './blog-grid-card.component';

describe('BlogGridCardComponent', () => {
  let component: BlogGridCardComponent;
  let fixture: ComponentFixture<BlogGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogGridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
