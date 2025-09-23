import { Component, input } from '@angular/core';
import { Category } from '../../../features/home/categories/category.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  category = input.required<Category>();
}
