import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../shared/services/blog';
import { Blog } from '../../shared/models/blogs';
import { Observable, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blog-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails  {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);

   blog$: Observable<Blog | undefined> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = params.get('id');
      return id ? this.blogService.getBlogBySlug(id) : [undefined];
    })
  );

}
