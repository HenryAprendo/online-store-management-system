import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = 'https://fakestoreapi.com/users';

  constructor() { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        retry(3),
        catchError((error:HttpErrorResponse) => {
          if(error.status === HttpStatusCode.NotFound){
            return throwError(() => new Error('The server could not find the requested content'))
          } else if(error.status === HttpStatusCode.Unauthorized) {
            return throwError(() => new Error('Authentication is required to obtain the requested response'))
          } else {
            return throwError(() => new Error('Oops an error has ocurred'))
          }
        })
      )
  }

}
