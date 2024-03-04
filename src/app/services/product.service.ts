import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductDto, Product, UpdateProductDto } from '../models/product.model';
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

  save(data:CreateProductDto): Observable<Product> {
    return this.http.post<Product>(this.apiUrl,data);
  }

  update(id:number, data:UpdateProductDto): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`,data);
  }

  delete(id:number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }

}
