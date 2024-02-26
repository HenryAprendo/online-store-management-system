import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor() { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }



}
