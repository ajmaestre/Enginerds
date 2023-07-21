import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  typeUser: string = 'free';

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<Token>{
    user.role = this.typeUser;
    return this.http.post<Token>(`${environment.BASE_URL}/user/save`, user).pipe(
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

  setToken(tkn: string){
    localStorage.setItem('tkn', tkn);
  }

  getToken(): string{
    const tkn: string = localStorage.getItem('tkn') || '';
    return tkn;
  }

}
