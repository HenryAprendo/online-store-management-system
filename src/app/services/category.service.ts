import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products/categories';

  constructor() { }

  findAll() {
    return this.http.get<string[]>(this.apiUrl);
  }

}
