import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { Product } from '../../core/models/product.interface';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-outdoor-lights',
  imports: [CardComponent, NgxPaginationModule],
  templateUrl: './outdoor-lights.component.html',
  styleUrl: './outdoor-lights.component.css',
})
export class OutdoorLightsComponent {
  private readonly productService = inject(ProductService);

  productList = signal<Product[]>([]);
  pageSize = signal<number>(15);
  p = signal<number>(1);
  total = signal<number>(100);

  ngOnInit(): void {
    this.getAllProductsDataOnCategory('68b026941922439837c4ca80');
  }

  getAllProductsDataOnCategory(productId: string): void {
    this.productService.getAllProductsOnCategory(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.productList.set(res.data);
        this.total.set(res.results);
        this.pageSize.set(res.paginationResult.limit);
        this.p.set(res.paginationResult.currentPage);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  
  
}
