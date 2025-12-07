import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly httpClient = inject(HttpClient);

  getUserOrder(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/orders`, {
      withCredentials: true,
    });
  }
}
