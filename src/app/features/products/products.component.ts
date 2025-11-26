import { Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { Product } from '../../core/models/product.interface';
import { ProductService } from '../../core/services/product/product.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../shared/pipes/search-pipe';

@Component({
  selector: 'app-products',
  imports: [CardComponent, NgxPaginationModule, FormsModule, SearchPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);

  productList = signal<Product[]>([]);
  pageSize!: number;
  p!: number;
  total!: number;
  searchTerm: string = '';

  ngOnInit(): void {
    this.getAllProductsData();
  }

  getAllProductsData(pageNumber: number = 1): void {
    this.productService.getAllProducts(pageNumber).subscribe({
      next: (res) => {
        console.log(res);
        this.productList.set(res.data);
        this.pageSize = res.metaData.limit;
        this.p = res.metaData.currentPage;
        this.total = res.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
