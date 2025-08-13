import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchForm } from '../search-form/search-form';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SearchForm],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
