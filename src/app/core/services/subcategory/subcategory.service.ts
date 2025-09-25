import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  private readonly httpClient = inject(HttpClient);

  GetAllSubcategoriesOnCategory(id: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/categories/${id}/subcategories`);
  }

  GetAllSubcategories(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/api/v1/subcategories`);
  }
}
