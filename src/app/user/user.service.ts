import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 

  }
  
  getProfile(): Observable<User>{
    return this.http.get<User>(`${environment.BASE_URL}/user/profile-user`, {
      headers: new HttpHeaders({'x-access-token': `${this.getToken()}`})
    });
  }

  getPhoto(image: string): Observable<Blob>{
    return this.http.get(`${environment.BASE_URL}/${image}`, {
      headers: new HttpHeaders({'x-access-token': `${this.getToken()}`}),
      responseType: 'blob'
    });
  }

  getToken(): string{
    const tkn: string = localStorage.getItem('tkn') || '';
    return tkn;
  }

  getUsers():Observable<any>{
    const jurado = {
                "id": 10,
                "nombre": "Alejandra",
                "apellido": "Hernandez",
                "cedula": 1202772345,
                "cargo": "vocal",
                "id_mesa": 3
    }
    const votes = {
      "votos": 25
    }
    return this.http.get(`https://myvote-api.onrender.com/routes/mesaRoute.php`, { 
      headers:  new HttpHeaders({
        'Content-Type': 'application/json',
        'token': '77471e4e502e84602383d1738cc21b18'
    })
    })
  }

}
