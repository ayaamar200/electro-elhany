export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  name: string;
}
