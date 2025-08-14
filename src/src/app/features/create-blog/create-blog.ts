import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../../shared/services/blog';
import { Router } from '@angular/router';
import { Blog } from '../../shared/models/blogs';

@Component({
  selector: 'app-create-blog',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css',
})
export class CreateBlog {
  private fb = inject(FormBuilder);
  private blogService = inject(BlogService);
  private router = inject(Router);

  blogForm = this.fb.group({
    title: ['', Validators.required],
    date: [new Date().toISOString().substring(0, 10), Validators.required],
    coverImage: [''],
    content: ['', [Validators.required, Validators.minLength(20)]],
    slug: ['', Validators.required],
  });

  submitting = false;
  error: string | null = null;

  submit() {
    if (this.blogForm.invalid) return;
    this.submitting = true;
    this.error = null;
    this.blogService.createBlog(this.blogForm.value as Blog).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.submitting = false;
        this.error = 'Failed to create blog.';
      },
    });
  }
}
