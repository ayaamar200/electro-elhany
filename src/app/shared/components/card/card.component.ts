import { Component, input } from '@angular/core';
import { Product } from '../../../core/models/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../../pipes/search-pipe';

@Component({
  selector: 'app-card',
  imports: [RouterLink, CurrencyPipe, SearchPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  // subcategory = input.required<Subcategory>();
  product = input.required<Product>();
}
