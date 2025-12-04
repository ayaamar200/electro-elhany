import { Component, inject, OnInit, signal } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.interface';
import { CurrencyPipe } from '@angular/common';
import { ToastService } from '../../core/services/toast/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly toastService = inject(ToastService);

  tax: number = 14;
  shipping: number | string = 'Free';

  cartDetails = signal<Cart | null>(null);
  ngOnInit() {
    this.getCartData();
  }
  getCartData() {
    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cartDetails.set(res.data);
        console.log('Cart data:', res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeItem(itemId: string): void {
    this.cartService.removeSpecificCartItem(itemId).subscribe({
      next: (res) => {
        console.log('Item removed:', res);
        if (res.status === 'success') {
          this.toastService.show('Item removed from Cart', 'success');
        }
        this.cartDetails.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  clearCart(): void {
    this.cartService.clearUserCart().subscribe({
      next: (res) => {
        console.log('Cart cleared:', res);
        if (res.status === 'success') {
          this.toastService.show('Cart cleared successfully', 'success');
        }
        this.cartDetails.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateItemQuantity(itemId: string, quantity: number): void {
    this.cartService.updateCartItemQuantity(itemId, quantity).subscribe({
      next: (res) => {
        console.log('Item quantity updated:', res);
        this.cartDetails.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
