import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../shared/services/blog';
import { BlogItem } from './blog-item/blog-item';
import { Blog } from '../../shared/models/blogs';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, BlogItem],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList {
  blogService = inject(BlogService);
  blogs$ = this.blogService.getBlogList();
}
