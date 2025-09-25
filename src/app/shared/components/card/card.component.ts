import { Component, input } from '@angular/core';
import { Subcategory } from '../../../core/models/subcategory.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  subcategory = input.required<Subcategory>();
}
