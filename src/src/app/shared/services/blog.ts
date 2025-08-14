import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blogs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) {}

  getBlogList(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiUrl}`);
  }

  getBlogListBySearch(search: string): Observable<Blog[]> {
  return this.http.get<Blog[]>(`${this.apiUrl}?q=${encodeURIComponent(search)}`);
  }

  getBlogBySlug(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${slug}`);
  }

  getBlogDetails(slug: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${slug}`);
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiUrl}`, blog);
  }

  editBlog(slug: string, blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/${slug}`, blog);
  }

  deleteBlog(slug: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${slug}`);
  }
}
