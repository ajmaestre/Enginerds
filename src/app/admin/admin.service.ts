import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<User>{
    return this.http.get<User>(`${environment.BASE_URL}/user/profile-user`, {
      headers: new HttpHeaders({'x-access-token': `${this.getToken()}`})
    });
  }

  getPhoto(image: string): Observable<Blob>{
    return this.http.get(`${environment.BASE_URL}/${image}`, {
      headers: new HttpHeaders({'x-access-token': `${this.getToken()}`}),
      responseType: 'blob'
    });
  }

  setToken(tkn: string){
    localStorage.setItem('tkn', tkn);
  }

  getToken(): string{
    const tkn: string = localStorage.getItem('tkn') || '';
    return tkn;
  }

}
