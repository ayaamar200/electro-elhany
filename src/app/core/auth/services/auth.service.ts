import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly HttpClient = inject(HttpClient);

  signup(data: object): Observable<any> {
    return this.HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }
  login(data: object): Observable<any> {
    return this.HttpClient.post(`${environment.baseUrl}/api/v1/auth/login`, data);
  }
}
