import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../shared/services/blog';
import { Blog } from '../../shared/models/blogs';

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  blog: Blog | null = null;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogDetails(id).subscribe(
        (blog) => {
          this.blog = blog;
          console.log('Blog details fetched:', this.blog);
        },
        (error) => {
          console.error('Error fetching blog details:', error);
          this.blog = null; // Handle error case
        }
      );
    }
  }
}
