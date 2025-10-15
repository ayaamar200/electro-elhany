export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  imageCover: string;
  images: string[];
  category: Category;
  subcategories: Subcategory[];
  brand: Category;
  ratingsAverage: number;
  ratingsQuantity: number;
  createdAt: string;
  updatedAt: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: Category2;
}

interface Category2 {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
}