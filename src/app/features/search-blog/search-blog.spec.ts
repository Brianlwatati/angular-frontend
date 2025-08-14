import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlog } from './search-blog';

describe('SearchBlog', () => {
  let component: SearchBlog;
  let fixture: ComponentFixture<SearchBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
