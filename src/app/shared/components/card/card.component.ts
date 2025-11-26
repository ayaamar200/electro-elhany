import { Component, inject, input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../../features/cart/services/cart.service';
import Swal from 'sweetalert2';
import { ToastService } from '../../../core/services/toast/toast.service';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // subcategory = input.required<Subcategory>();
  product = input.required<Product>();
  private readonly cartService = inject(CartService);
  private readonly toastService = inject(ToastService);

  addToCart(productId: string): void {
    this.cartService.addProductToCart(productId).subscribe({
      next: (res) => {
        console.log('Product added to cart:', res);
        if (res.status === 'success') {
          this.toastService.show(res.message, 'success');
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
