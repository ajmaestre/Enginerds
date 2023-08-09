import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private adminService: AdminService) { }

  updateProfile(email: string, data: User): Observable<Response>{
    return this.http.patch<Response>(`${environment.BASE_URL}/user/update-profile/${email}`, data, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  saveImage(file: Blob): Observable<any>{
    const form = new FormData();
    form.append('file', file);
    return this.http.post(`${environment.BASE_URL}/user/save-image`, form, {
      headers: new HttpHeaders({
        'x-access-token': `${this.adminService.getToken()}`
      })
    });
  }

}
