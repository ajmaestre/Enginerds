import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor(private http: HttpClient, private userService: UserService) { }

  updateProfile(email: string, data: User): Observable<Response>{
    return this.http.patch<Response>(`${environment.BASE_URL}/user/update-profile/${email}`, data, {
      headers: new HttpHeaders({'x-access-token': `${this.userService.getToken()}`})
    });
  }

  saveImage(file: Blob): Observable<any>{
    const form = new FormData();
    form.append('file', file);
    return this.http.post(`${environment.BASE_URL}/user/save-image`, form, {
      headers: new HttpHeaders({
        'x-access-token': `${this.userService.getToken()}`
      })
    });
  }

}
