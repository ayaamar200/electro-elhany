import { Component, inject, OnInit, signal } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductService } from '../../core/services/product/product.service';
import { Product } from '../../core/models/product.interface';
import { ProdCatComponent } from '../../shared/components/prod-cat/prod-cat.component';

@Component({
  selector: 'app-wiring-devices',
  imports: [ NgxPaginationModule, ProdCatComponent],
  templateUrl: './wiring-devices.component.html',
  styleUrl: './wiring-devices.component.css',
})
export class WiringDevicesComponent implements OnInit {
  private readonly productService = inject(ProductService);

  categoryId = signal<string>('68ac4376014d06806bc08295');

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
