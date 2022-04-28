import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/IUser.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}users`);
  }

  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}users/${id}`);
  }
}
