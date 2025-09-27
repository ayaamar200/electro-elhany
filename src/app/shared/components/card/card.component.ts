import { Category } from './../../../features/home/categories/category.interface';
import { Component, input } from '@angular/core';
import { Subcategory } from '../../../core/models/subcategory.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // subcategory = input.required<Subcategory>();
  category = input.required<Category>();
}
