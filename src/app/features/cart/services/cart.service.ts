import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly httpClient = inject(HttpClient);

  addProductToCart(productId: string, color?: string): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}/api/v1/cart`,
      { productId, color },
      { withCredentials: true }
    );
  }

  getCart(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/cart`, { withCredentials: true });
  }

  removeSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`, {
      withCredentials: true,
    });
  }

  clearUserCart(): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/api/v1/cart`, { withCredentials: true });
  }

  updateCartItemQuantity(id: string, quantity: number): Observable<any> {
    return this.httpClient.put(
      `${environment.baseUrl}/api/v1/cart/${id}`,
      { quantity },
      { withCredentials: true }
    );
  }

  checkoutSession(cartId: string | null, data: object): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}/api/v1/orders/checkout-session/${cartId}`,
      data,
      { withCredentials: true }
    );
  }

  createCashOrder(cartId: string | null, data: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/api/v1/orders/${cartId}`, data, {
      withCredentials: true,
    });
  }
}
