import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, private adminService: AdminService) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.BASE_URL}/category/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>(`${environment.BASE_URL}/category/unique/${id}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getCategoryByName(name: string): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.BASE_URL}/category/get-category/${name}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  saveCategory(category: Category): Observable<Response>{
    return this.http.post<Response>(`${environment.BASE_URL}/category/save`, category, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  deleteCategory(id: number): Observable<Response>{
    return this.http.delete<Response>(`${environment.BASE_URL}/category/delete/${id}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  updateCategory(id: number, category: Category): Observable<Response>{
    return this.http.patch<Response>(`${environment.BASE_URL}/category/update/${id}`, category, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

}
