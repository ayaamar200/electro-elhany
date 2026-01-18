import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductDetailsService } from './services/product-details.service';
import { Product } from '../../core/models/product.interface';
import { CartService } from '../cart/services/cart.service';
import { ToastService } from '../../core/services/toast/toast.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productDetailsService = inject(ProductDetailsService);
  product = input.required<Product>();
  private readonly cartService = inject(CartService);
  private readonly toastService = inject(ToastService);
  productId: string | null = null;

  productDetails = signal<Product>({} as Product);

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
      // error: (err) => {
      //   console.log(err);
      // },
    });
  }

    addToCart(productId: string): void {
    this.cartService.addProductToCart(productId).subscribe({
      next: (res) => {
        console.log('Product added to cart:', res);
        this.cartService.countNumber.set(res.numberOfCartItems);
        if (res.status === 'success') {
          this.toastService.show(res.message, 'success');
        }
      },
      // error: (err) => {
      //   console.error(err);
      // },
    });
  }
}
