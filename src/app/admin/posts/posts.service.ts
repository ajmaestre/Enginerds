import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';
import { SubCategory } from 'src/app/interfaces/subcategory';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private adminService: AdminService) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.BASE_URL}/post/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getSubCategories(): Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(`${environment.BASE_URL}/subcategory/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  savePost(data: Post, file: Blob): Observable<Response>{
    const form = new FormData();
    form.append('file', file);
    form.append('data', JSON.stringify(data));
    return this.http.post<Response>(`${environment.BASE_URL}/post/save`, form, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getImage(image: SafeUrl): Observable<Blob>{
    return this.http.get(`${environment.BASE_URL}/${image}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`}),
      responseType: 'blob'
    });
  }

}
