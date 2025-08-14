import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [FormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css'
})
export class SearchForm {
  searchText = '';
  constructor(private router: Router) {}
  onSubmit() {
    const value = this.searchText.trim();
    if (value) {
      this.router.navigate(['/search-blog'], { queryParams: { q: value } });
    }
  }
}
