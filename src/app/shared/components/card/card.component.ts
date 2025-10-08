import { Component, input } from '@angular/core';
import { Category } from '../../../features/home/components/categories/category.interface';
import { Product } from '../../../core/models/product.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // subcategory = input.required<Subcategory>();
  product = input.required<Product>();
}
