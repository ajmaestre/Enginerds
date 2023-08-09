import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IsAuth } from '../interfaces/isAuth';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router: Router, private http: HttpClient) { }

  isAdmin(): Observable<IsAuth>{
    return this.http.get<IsAuth>(`${environment.BASE_URL}/user/is-admin`, {
      headers: new HttpHeaders({'x-access-token': `${this.getToken()}`})
    }).pipe(
      tap(
        (res: IsAuth) => {
          if(res.response)
            return res.response;
          this.router.navigate(['/']);
          return false;
        },
        (err) => {
          this.router.navigate(['/']);
          return err.error.response;
        }
      )
    );
  }

  getToken(): string{
    const tkn: string = localStorage.getItem('tkn') || '';
    return tkn;
  }

}
