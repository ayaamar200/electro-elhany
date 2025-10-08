import { Component, inject, OnInit, signal } from '@angular/core';
import { SubcategoryService } from '../../../../core/services/subcategory/subcategory.service';
import { Subcategory } from '../../../../core/models/subcategory.interface';

@Component({
  selector: 'app-subcategory',
  imports: [],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css',
})
export class SubcategoryComponent implements OnInit {
  private readonly subcategoryService = inject(SubcategoryService);

  subcategoryList = signal<Subcategory[]>([]);
  ngOnInit(): void {
    this.getSubcategoryOnCategory('68ac431f014d06806bc08291');
  }

  getSubcategoryOnCategory(id: string): void {
    this.subcategoryService.GetAllSubcategoriesOnCategory(id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.subcategoryList.set(res.data);
      },
    });
  }
}
