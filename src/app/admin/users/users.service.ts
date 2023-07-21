import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private adminService: AdminService) { }
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.BASE_URL}/user/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
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

  saveUser(user: User): Observable<Response>{
    return this.http.post<Response>(`${environment.BASE_URL}/user/save-user`, user).pipe(
      tap(
        (res: Response) => {
          
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

}
