import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CreateProductDto, Product, UpdateProductDto } from '../models/product.model';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor() { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        retry(3),
        catchError((error:HttpErrorResponse) => {
          if(error.status ===  HttpStatusCode.NotFound){
            return throwError(() => new Error('The server could not find the requested content'))
          } else if (error.status === HttpStatusCode.Unauthorized) {
            return throwError(() => new Error('Authentication is required to obtain the requested response'))
          } else {
            return throwError(() => new Error('Oops an error has ocurred'));
          }
        })
      )
  }

  findOne(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
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







