import { Component, inject, OnInit, signal } from '@angular/core';
import { CardComponent } from "../../shared/components/card/card.component";
import { Product } from '../../core/models/product.interface';
import { ProductService } from '../../core/services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
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
