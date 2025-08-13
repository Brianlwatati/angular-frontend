import { Component, Input } from '@angular/core';
import { Blog } from '../../../shared/models/blogs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-item.html',
  styleUrl: './blog-item.css',
})
export class BlogItem {
  @Input()
  blog!: Blog; // Replace 'any' with your Blog type if you have one
}
