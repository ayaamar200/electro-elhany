import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { Product } from '../../core/models/product.interface';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProdCatComponent } from '../../shared/components/prod-cat/prod-cat.component';

@Component({
  selector: 'app-outdoor-lights',
  imports: [NgxPaginationModule, ProdCatComponent],
  templateUrl: './outdoor-lights.component.html',
  styleUrl: './outdoor-lights.component.css',
})
export class OutdoorLightsComponent {
  private readonly productService = inject(ProductService);

  categoryId = signal<string>('68b026941922439837c4ca80');

  productList = signal<Product[]>([]);
  pageSize = signal<number>(15);
  p = signal<number>(1);
  total = signal<number>(0);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const catId = this.categoryId();
    const page = this.p();

    this.productService.getAllProductsOnCategory(catId, page).subscribe({
      next: (res) => {
        this.productList.set(res.data);
        this.total.set(res.results);
        this.pageSize.set(res.metaData.limit);
        this.p.set(res.metaData.currentPage);
      },
    });
  }

  searchTerm = signal('');

  onSearchChange(term: string) {
    this.searchTerm.set(term);
    this.p.set(1);
    this.loadProducts();
  }

  onPageChange(page: number) {
    this.p.set(page);
    this.loadProducts();
  }
}
