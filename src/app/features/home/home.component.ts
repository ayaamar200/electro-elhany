import { Component } from '@angular/core';
import { CategoriesComponent } from './components/categories/categories.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';
import { OurServicesComponent } from './components/our-services/our-services.component';

@Component({
  selector: 'app-home',
  imports: [CategoriesComponent, MainSliderComponent, SubcategoriesComponent, OurServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
