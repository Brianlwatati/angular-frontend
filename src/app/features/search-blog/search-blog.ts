import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../shared/services/blog';
import { BlogItem } from '../blog-list/blog-item/blog-item';
import { Blog } from '../../shared/models/blogs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-search-blog',
  imports: [CommonModule, BlogItem, ReactiveFormsModule],
  templateUrl: './search-blog.html',
  styleUrl: './search-blog.css'
})
export class SearchBlog {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private router = inject(Router);

  searchControl = new FormControl('');
  blogs$: Observable<Blog[]>;

  constructor() {
    // Listen to query param changes and input changes
    const query$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        const q = params.get('q') || '';
        this.searchControl.setValue(q, { emitEvent: false });
        return of(q);
      })
    );

    this.blogs$ = combineLatest([
      this.searchControl.valueChanges.pipe(startWith(''), debounceTime(300), distinctUntilChanged()),
      query$
    ]).pipe(
      switchMap(([input, query]) => {
        const search = input || query || '';
        if (!search) return of([]);
        return this.blogService.getBlogListBySearch(search);
      })
    );
  }

  onSearch() {
    const value = this.searchControl.value?.trim();
    if (value) {
      this.router.navigate(['/search-blog'], { queryParams: { q: value } });
    }
  }
}
