import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from './service/order.service';
import { Order } from './model/order.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css',
})
export class AllOrdersComponent implements OnInit {
  private readonly orderService = inject(OrderService);
  orders = signal<Order[]>([]);

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getUserOrder().subscribe({
      next: (res) => {
        console.log('order data:', res.data);
        this.orders.set(res.data);
      },
    });
  }
}
