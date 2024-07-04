import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Se obtiene la URL base desde el archivo environment
  private apiURL = environment.BaseUrl;

  //Se inyecta dependencias
  constructor(private http: HttpClient) {}

  // Método para obtener usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURL);
  }

  // Método para obtener usuarios por id
  getUserByID(id: number): Observable<User> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<User>(url);
  }
}
