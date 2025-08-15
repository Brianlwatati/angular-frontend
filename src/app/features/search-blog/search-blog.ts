import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../shared/services/blog';
import { BlogItem } from '../blog-list/blog-item/blog-item';
import { Blog } from '../../shared/models/blogs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { SearchForm } from "../../shared/components/search-form/search-form";

@Component({
  selector: 'app-search-blog',
  imports: [CommonModule, BlogItem, ReactiveFormsModule, SearchForm],
  templateUrl: './search-blog.html',
  styleUrl: './search-blog.css'
})
export class SearchBlog {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private router = inject(Router);
  queryParam:string = '';

  blogs$: Observable<Blog[]>;

  constructor() {
    // Listen to query param changes and fetch blogs based on the search query
    this.blogs$ = combineLatest([
      this.route.queryParamMap.pipe(
        startWith({ get: () => '' }), // Start with an empty query param
        switchMap(params => {
          this.queryParam = params.get('q') || '';
          return this.blogService.getBlogListBySearch(this.queryParam);
        })
      )
    ]).pipe(
      distinctUntilChanged(), // Ensure we only emit when the value changes
      // Extract the first (and only) element from the array
      // so that blogs$ is Observable<Blog[]>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      map(([blogs]) => blogs)
    );
    
   
  
  }

 
}
