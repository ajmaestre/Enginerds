import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/category/list`).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getCategory(id: number): Observable<any>{
    return this.http.get(`${this.BASE_URL}/category/unique/${id}`).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  saveCategory(category: Category): Observable<any>{
    return this.http.post(`${this.BASE_URL}/category/save`, category).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  deleteCategory(id: number): Observable<any>{
    return this.http.delete(`${this.BASE_URL}/category/delete/${id}`).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  updateCategory(id: number, category: Category): Observable<any>{
    return this.http.patch(`${this.BASE_URL}/category/update/${id}`, category).pipe(
      tap(
        (res) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

}
