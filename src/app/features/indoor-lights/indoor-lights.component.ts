import { Component, inject, signal } from '@angular/core';
import { Product } from '../../core/models/product.interface';
import { ProductService } from '../../core/services/product/product.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indoor-lights',
  imports: [CardComponent, NgxPaginationModule, SearchPipe, FormsModule],
  templateUrl: './indoor-lights.component.html',
  styleUrl: './indoor-lights.component.css',
})
export class IndoorLightsComponent {
  private readonly productService = inject(ProductService);

  productList = signal<Product[]>([]);
  pageSize = signal<number>(15);
  p = signal<number>(1);
  total = signal<number>(100);

  searchTerm: string = '';

  ngOnInit(): void {
    this.getAllProductsDataOnCategory('68b026851922439837c4ca7e');
  }

  getAllProductsDataOnCategory(productId: string): void {
    this.productService.getAllProductsOnCategory(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.productList.set(res.data);
        this.total.set(res.results);
        this.pageSize.set(res.metaData.limit);
        this.p.set(res.metaData.currentPage);
      },
      // error: (error) => {
      //   console.log(error);
      // },
    });
  }
}
