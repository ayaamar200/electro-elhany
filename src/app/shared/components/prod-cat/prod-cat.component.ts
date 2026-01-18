import { Component, EventEmitter, input,  Output, signal } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../../pipes/search-pipe';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-prod-cat',
  imports: [ NgxPaginationModule, SearchPipe, CardComponent],
  templateUrl: './prod-cat.component.html',
  styleUrl: './prod-cat.component.css',
})
export class ProdCatComponent {
  // UI
  title = input<string>('Products');
  showSearch = input<boolean>(true);
  searchPlaceholder = input<string>('Search.....');

  // Data
  products = input<any[]>([]);
  total = input<number>(0);

  // Pagination
  paginationId = input<string>('products');
  itemsPerPage = input<number>(10);
  currentPage = input<number>(1);

  // Search (local signal)
  searchTerm = signal<string>('');

  @Output() pageChange = new EventEmitter<number>();
  @Output() searchTermChange = new EventEmitter<string>();

 setSearch(value: string) {
  this.searchTerm.set(value);
  this.searchTermChange.emit(value);
}
onSearchInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.setSearch(value);
}
onPageChange(page: number) {
  this.pageChange.emit(page); 
}
  
}
