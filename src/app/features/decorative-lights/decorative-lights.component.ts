import { Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../shared/pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product/product.service';
import { Product } from '../../core/models/product.interface';

@Component({
  selector: 'app-decorative-lights',
  imports: [CardComponent, NgxPaginationModule, SearchPipe, FormsModule],
  templateUrl: './decorative-lights.component.html',
  styleUrl: './decorative-lights.component.css',
})
export class DecorativeLightsComponent implements OnInit {
  private readonly productService = inject(ProductService);

  productList = signal<Product[]>([]);
  pageSize = signal<number>(15);
  p = signal<number>(1);
  total = signal<number>(100);

  searchTerm: string = '';

  ngOnInit(): void {
    this.getAllProductsDataOnCategory('68b0269f1922439837c4ca82');
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
