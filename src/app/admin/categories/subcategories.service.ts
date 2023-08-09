import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from 'src/app/interfaces/subcategory';
import { environment } from 'src/environments/environment';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http: HttpClient, private adminService: AdminService){}

  getSubCategories(): Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(`${environment.BASE_URL}/subcategory/list`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getSubCategory(id: number): Observable<SubCategory>{
    return this.http.get<SubCategory>(`${environment.BASE_URL}/subcategory/unique/${id}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getSubCategoryByName(name: string): Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(`${environment.BASE_URL}/subcategory/get-subcategory/${name}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  getSubCategoryByCategory(id: number): Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(`${environment.BASE_URL}/subcategory/get-subcategories-category/${id}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  saveSubCategory(subcategory: SubCategory): Observable<Response>{
    return this.http.post<Response>(`${environment.BASE_URL}/subcategory/save`, subcategory, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  deleteSubCategory(id: number): Observable<Response>{
    return this.http.delete<Response>(`${environment.BASE_URL}/subcategory/delete/${id}`, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

  updateSubCategory(id: number, subcategory: SubCategory): Observable<Response>{
    return this.http.patch<Response>(`${environment.BASE_URL}/subcategory/update/${id}`, subcategory, {
      headers: new HttpHeaders({'x-access-token': `${this.adminService.getToken()}`})
    });
  }

}
