import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Session } from 'src/app/interfaces/session';
import { Token } from 'src/app/interfaces/token';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  getSession(session: Session): Observable<Token>{
    return this.http.post<Token>(`${environment.BASE_URL}/user/login`, session).pipe(
      tap(
        (res: Token) => {
          this.setToken(res.token);
          this.router.navigate(['/admin']);
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
