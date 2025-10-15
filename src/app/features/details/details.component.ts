import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from './services/product-details.service';
import { Product } from '../../core/models/product.interface';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productDetailsService = inject(ProductDetailsService);

  productId: string | null = null;
    productDetails = signal<Product>({}as Product);


  ngOnInit(): void {
    this.getProductId();
    this.getProductDetailsData();
  }
  getProductId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (urlPrams) => {
        this.productId = urlPrams.get('id');
        console.log(urlPrams.get('id'));
      },
    });
  }

  getProductDetailsData(): void {
    this.productDetailsService.getProductDetails(this.productId!).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productDetails.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
