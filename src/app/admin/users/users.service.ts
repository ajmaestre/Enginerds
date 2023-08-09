import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import { User, UserSafe } from 'src/app/interfaces/user';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private adminService: AdminService) { }
  
  getUsers(): Observable<UserSafe[]>{
    return this.http.get<UserSafe[]>(`${environment.BASE_URL}/user/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getUsersByAll(data: string): Observable<User[]>{
    return this.http.get<User[]>(`${environment.BASE_URL}/user/get-users-byall/${data}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getUserBysEmail(email: string): Observable<User>{
    return this.http.get<User>(`${environment.BASE_URL}/user/unique-email/${email}`,{
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  saveUser(user: User): Observable<Response>{
    return this.http.post<Response>(`${environment.BASE_URL}/user/save-user`, user);
  }

  deleteUser(email: string): Observable<Response>{
    return this.http.delete<Response>(`${environment.BASE_URL}/user/delete-email/${email}`,{
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  updateUser(email: string, data: User): Observable<Response>{
    return this.http.patch<Response>(`${environment.BASE_URL}/user/update-user/${email}`, data, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getPhoto(image: SafeUrl): Observable<Blob>{
    return this.http.get(`${environment.BASE_URL}/${image}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`}),
      responseType: 'blob'
    });
  }

}
