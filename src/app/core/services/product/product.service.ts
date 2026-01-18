import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient = inject(HttpClient);

  getAllProducts(pageNumber: number = 1): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/products?page=${pageNumber}`);
  }

  getAllProductsOnCategory(categoryId:string, page:number): Observable<any> {
    // Products On Category
    return this.httpClient.get(`${environment.baseUrl}/api/v1/categories/${categoryId}/products?page=${page}`);
  }
}
