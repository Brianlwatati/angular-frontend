import { Routes } from '@angular/router';
import { BlogList } from './features/blog-list/blog-list';
import { CreateBlog } from './features/create-blog/create-blog';
import { BlogDetails } from './features/blog-details/blog-details';
import { SearchBlog } from './features/search-blog/search-blog';

export const routes: Routes = [
  {
    path: '',
    component: BlogList,
  },
  {
    path: 'create-blog',
    component: CreateBlog,
  },
  {
    path: 'blog/:id',
    component: BlogDetails,
  },
  {
    path: 'search-blog',
    component: SearchBlog,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
