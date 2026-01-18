import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../core/models/product.interface';
import { ProductService } from '../../core/services/product/product.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProdCatComponent } from '../../shared/components/prod-cat/prod-cat.component';

@Component({
  selector: 'app-indoor-lights',
  imports: [ NgxPaginationModule,  ProdCatComponent],
  templateUrl: './indoor-lights.component.html',
  styleUrl: './indoor-lights.component.css',
})
export class IndoorLightsComponent implements OnInit {
  private readonly productService = inject(ProductService);

  categoryId = signal<string>('68b026851922439837c4ca7e');

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

    // IMPORTANT: your service must accept page param
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
