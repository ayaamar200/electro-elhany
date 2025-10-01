import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/category.interface';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, CardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategoriesComponent implements OnInit {
  private readonly categoriesService = inject(CategoriesService);

  categoryList = signal<Category[]>([]);

  ngOnInit(): void {
    this.getAllCategoriesData();
  }

  getAllCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categoryList.set(res.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
