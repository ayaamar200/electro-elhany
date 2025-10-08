import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../../core/services/product/product.service';
import { Product } from '../../../../core/models/product.interface';
import { CardComponent } from "../../../../shared/components/card/card.component";

@Component({
  selector: 'app-popular-products',
  imports: [CardComponent],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);

  productList = signal<Product[]>([]);

  ngOnInit(): void {
    this.getAllProductsData();
  }

  getAllProductsData(): void {
    this.productService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.productList.set(res.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
