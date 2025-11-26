import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { DecodeToken } from '../../models/decode-token.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly HttpClient = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  signup(data: object): Observable<any> {
    return this.HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }
  login(data: object): Observable<any> {
    return this.HttpClient.post(`${environment.baseUrl}/api/v1/auth/login`, data);
  }

  signOut(): void {
    if (isPlatformBrowser(this.platformId)) {
      // remove token from local storage
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
    }
  }

  decodeToken(): DecodeToken | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const decoded = jwtDecode<DecodeToken>(token);
      return decoded;
    } catch (err) {
      this.signOut();
      return null;
    }
  }
}
