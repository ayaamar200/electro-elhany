import { Component, inject, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart } from './models/cart.interface';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  private readonly cartService = inject(CartService);
  cartDetails: Cart = {} as Cart;

  ngOnInit() {
    this.getCartData();
  }
  getCartData() {
    this.cartService.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartDetails = res.data;
        console.log('Cart data:', res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
