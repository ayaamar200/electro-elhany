import { Component } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';

@Component({
  selector: 'app-home',
  imports: [CategoriesComponent, MainSliderComponent, PopularProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
