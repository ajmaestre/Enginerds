import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Category } from '../interfaces/category';
import { User } from '../interfaces/user';
import { Session } from '../interfaces/session';
import { Post } from '../interfaces/post';
import { Token } from '../interfaces/token';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BASE_URL: string = 'http://localhost:8080';
  token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjg5NzEzNTA2LCJleHAiOjE2ODk3NDk1MDZ9.6ipA8Mcl0sqeb5Gc8_ODD5wiYAi0_d4HGdxBk_jg-BA';

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

  saveUser(user: any): Observable<Token>{
    return this.http.post<Token>(`${this.BASE_URL}/user/save`, user).pipe(
      tap(
        (res: Token) => {
          this.setToken(res.token);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  saveImage(file: Blob): Observable<any>{
    const form = new FormData();
    form.append('file', file);
    return this.http.post(`${this.BASE_URL}/user/save-image`, form, {
      headers: new HttpHeaders({
        'x-access-token': `${this.token}`
      })
    }).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getSession(session: Session): Observable<Token>{
    return this.http.post<Token>(`${this.BASE_URL}/user/login`, session).pipe(
      tap(
        (res: Token) => {
          this.setToken(res.token);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getUsers(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/user/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.token}`})
    }).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  getProfile(): Observable<any>{
    return this.http.get(`${this.BASE_URL}/user/profile-user`, {
      headers: new HttpHeaders({'x-access-token': `${this.token}`})
    }).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  savePost(post: Post): Observable<any>{
    return this.http.post(`${this.BASE_URL}/post/save`, post).pipe(
      tap(
        (res) => {

        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  setToken(tkn: string){
    localStorage.setItem('tkn', tkn);
  }

  getToken(): string{
    const tkn: string = localStorage.getItem('tkn') || '';
    return tkn;
  }

}
